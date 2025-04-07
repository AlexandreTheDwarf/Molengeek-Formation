import os

OUTPUT_PATH = os.path.expanduser("~/Documents/Molengeek-Formation/Python/Jour 5/exercice_3/output/")

# Assure-toi que le répertoire existe, sinon crée-le
if not os.path.exists(OUTPUT_PATH):
    try:
        os.makedirs(OUTPUT_PATH)
        print(f"Répertoire {OUTPUT_PATH} créé.")
    except Exception as e:
        print(f"Erreur lors de la création du répertoire : {e}")
        exit()

while True:
    commande = input('Entrez une commande> ')
    commande = commande.lower()

    if commande == "exit" or commande == "quit":
        break

    if commande == "help":
        print("Commandes disponibles :")
        print("______________________")
        print("read (nom d'un fichier) -> lire un fichier")
        print("write (nom d'un fichier) -> écrire dans un fichier")
        print("create (nom d'un fichier) -> crée un fichier")
        print("del (nom d'un fichier) -> delete un fichier")
        print("help -> donne les commandes disponibles")
        print("quit ou exit -> quitte le programme")

    elif commande.startswith("read"):
        # Si la commande est "read" seule
        if commande.strip() == "read":
            try:
                fichiers = os.listdir(OUTPUT_PATH)
                if fichiers:
                    print("Fichiers disponibles :")
                    for f in fichiers:
                        print(" -", f)
                else:
                    print("Aucun fichier trouvé dans le dossier.")
            except Exception as e:
                print(f"Erreur lors de la lecture du dossier : {e}")
        else:
            fichier = commande[len("read "):]  # Récupère le nom du fichier après "read "
            file_path = os.path.join(OUTPUT_PATH, fichier)
            try:
                openFile = open(file_path, "r")
                contenu = openFile.read()
                openFile.close()
                print(f"Contenu de '{fichier}' :\n{contenu}")
            except Exception as e:
                print(f"Erreur lors de la lecture du fichier : {e}")

    elif commande.startswith("create"):
        # Si la commande est "create" seule
        if commande.strip() == "create":
            # Demander le nom du fichier à créer
            fichier = input("Entrez le nom du fichier à créer : ")
            file_path = os.path.join(OUTPUT_PATH, fichier)
            try:
                # Ouvrir le fichier en mode 'a' et le fermer après l'avoir créé
                newFile = open(file_path, "a")
                newFile.close()
                print(f"Le fichier '{fichier}' a été créé.")
            except Exception as e:
                print(f"Erreur lors de la création du fichier : {e}")
        
        # Si la commande est "create <nom_fichier>"
        else:
            fichier = commande[len("create "):]  # Récupère le nom du fichier après "create "
            file_path = os.path.join(OUTPUT_PATH, fichier)
            try:
                # Ouvrir le fichier en mode 'a' et le fermer après l'avoir créé
                newFile = open(file_path, "a")
                newFile.close()
                print(f"Le fichier '{fichier}' a été créé.")
            except Exception as e:
                print(f"Erreur lors de la création du fichier : {e}")

    elif commande.startswith("write"):
        # Si la commande est "write" seule
        if commande.strip() == "write":
            # Demander le nom du fichier à modifier
            fichier = input("Entrez le nom du fichier à modifier : ")
            file_path = os.path.join(OUTPUT_PATH, fichier)
            try:
                # Ouvrir le fichier en mode 'a+' et le fermer après l'avoir modifié
                newFile = open(file_path, "a+")
                newText = input("quelle est votre texte a implémenter ?")
                newFile.write(newText)
                newFile.close()
                print(f"Le fichier '{fichier}' a été modifié avec succés.")
            except Exception as e:
                print(f"Erreur lors de la modification du fichier : {e}")

        else :
            fichier = commande[len("write "):]  # Récupère le nom du fichier après "write "
            file_path = os.path.join(OUTPUT_PATH, fichier)
            try:
                # Ouvrir le fichier en mode 'a+' et le fermer après l'avoir modifié
                newFile = open(file_path, "a+")
                newText = input("quelle est votre texte a implémenter ?")
                newFile.write(newText)
                newFile.close()
                print(f"Le fichier '{fichier}' a été modifié avec succés.")
            except Exception as e:
                print(f"Erreur lors de la modification du fichier : {e}")

    elif commande.startswith("del"):
        # Si la commande est "del" seule
        if commande.strip() == "del":
            # Demander le nom du fichier à supprimer
            fichier = input("Entrez le nom du fichier à delete : ")
        else:
            fichier = commande[len("del "):]  # Récupère le nom du fichier après "del "

        file_path = os.path.join(OUTPUT_PATH, fichier)

        if os.path.exists(file_path):
            AreYouSure = input(f"Êtes-vous sûr de vouloir supprimer '{fichier}' ? (oui/non) : ").lower()
            if AreYouSure == "oui":
                try:
                    os.remove(file_path)
                    print(f"Le fichier '{fichier}' a été supprimé.")
                except Exception as e:
                    print(f"Erreur lors de la suppression du fichier : {e}")
            else:
                print("Suppression annulée.")
        else:
            print("Le fichier n'existe pas.")
            
    else:
        print("Commande invalide.")
