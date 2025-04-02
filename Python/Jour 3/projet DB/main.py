# coding: utf-8

import sqlite3

import os

# Obtenez le chemin du dossier actuel
current_directory = os.path.dirname(os.path.abspath(__file__))

# Spécifiez le chemin de la base de données dans le même dossier
db_path = os.path.join(current_directory, 'maDb.db')

# Connexion à la base de données
conn = sqlite3.connect(db_path)
cursor = conn.cursor()

while True:
    commande = input('entrez une commande> ')

    if commande == "exit" or commande == "quit":
        break

    if commande == "help":
        print("Commandes disponibles :")
        print("exit or quit : Arrêter le programme.")
        print("init_db : Initialiser une nouvelle base de données avec la table 'users'.")
        print("show_all : Afficher l'ID, le nom, le rôle et le score de tous les clients.")
        print("add_client : Ajouter un nouveau client.")
        print("delete_client : Supprimer un client en utilisant son ID.")
        print("show_client : Afficher les informations d'un client spécifique en utilisant son ID.")
        print("help : Afficher cette liste de commandes.")

    if commande == "init_db":
        cursor.execute("""
        CREATE TABLE IF NOT EXISTS users(
            id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
            name TEXT,
            role TEXT,
            score INTERGER
        )
        """)
        conn.commit()

    if commande == "show_all":
        cursor.execute("""SELECT id, name, role, score FROM users""")
        rows = cursor.fetchall()

        if not rows:
            print("Aucun client trouvé dans la base de données.")
        else:
            for row in rows:
                print('{0} : {1}, {2}, Score: {3}'.format(row[0], row[1], row[2], row[3]))

    if commande == "add_client":
        while True:
            try:
                # Demander le nom de l'utilisateur
                InputName = input("Name of user? ")
                if len(InputName) < 2:
                    raise ValueError("Le nom doit contenir au moins 2 lettres.")

                # Demander le rôle de l'utilisateur
                InputRole = input("Role of user? ")
                if InputRole not in ["admin", "user", "banni"]:
                    raise ValueError("Le rôle doit être 'admin', 'user' ou 'banni'.")

                # Demander le score de l'utilisateur
                InputScore = input("Score of user? ")
                if not InputScore.isdigit() or int(InputScore) < 0 or int(InputScore) > 10:
                    raise ValueError("Le score doit être un nombre entre 0 et 10.")

                # Convertir le score en entier
                InputScore = int(InputScore)

                # Préparer les données à insérer
                data = {"name": InputName, "role": InputRole, "score": InputScore}

                # Insérer les données dans la base de données
                cursor.execute("""
                INSERT INTO users(name, role, score) VALUES(:name, :role, :score)""", data)
                conn.commit()

                print("Utilisateur ajouté avec succès!")
                break  # Sortir de la boucle après un ajout réussi

            except ValueError as e:
                print(f"Erreur: {e}")
            except sqlite3.IntegrityError:
                print("Erreur d'intégrité de la base de données. Vérifiez les contraintes de la table.")
            except Exception as e:
                print(f"Une erreur inattendue s'est produite: {e}")

    if commande == "delete_client":
        user_id_delete = input("Id of user you want to delete? ")

        # Vérifier si l'entrée utilisateur n'est pas vide
        if user_id_delete.strip() == "":
            print("User input is empty")
        else:
            try:
                # Préparer la requête de suppression
                delete_variable = """DELETE FROM users WHERE id = ?"""
                cursor.execute(delete_variable, (user_id_delete,))

                # Vérifier si un utilisateur a été supprimé
                if cursor.rowcount:
                    print('User deleted:', user_id_delete)
                else:
                    print('User not found:', user_id_delete)

                # Valider la transaction
                conn.commit()

            except sqlite3.Error as e:
                print(f"Database error: {e}")
            except Exception as e:
                print(f"An unexpected error occurred: {e}")

    if commande == "show_client":

        InputId = input("Give me the id you want to see: ")

        # Vérifier si l'entrée utilisateur n'est pas vide
        if InputId.strip() == "":
            print("User input is empty")
        else:
            try:
                # Exécuter la requête pour récupérer les informations de l'utilisateur
                cursor.execute("""SELECT id, name, role, score FROM users WHERE id = ?""", (InputId,))
                response = cursor.fetchone()

                # Vérifier si un utilisateur a été trouvé
                if response:
                    print(f"ID: {response[0]}, Name: {response[1]}, Role: {response[2]}, Score: {response[3]}")
                else:
                    print("User not found with the given ID.")

            except sqlite3.Error as e:
                print(f"Database error: {e}")
            except Exception as e:
                print(f"An unexpected error occurred: {e}")

# Fermer la connexion à la base de données
conn.close()

print("bye bisous")
