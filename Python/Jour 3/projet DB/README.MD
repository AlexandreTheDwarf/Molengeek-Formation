Projet DB 

## projet de recherche.


# ATTENTION : lisez attentivement tout les consignes avant de commencer.


# il vous faudra l'extension SQLite viewer pour consulté le fichier de db.


# créez un pseudo terminal permettant de faire divers commande.
1. init_db : initialise une nouvelle db avec la table client
2. show_all : affiche le nom et l'id de tout les clients
3. add_client : ajoute un nouveau client
4. delete_client : supprime un client
5. show_client : affiche les infos d'un seul client


# pour réaliser ce projet vous aurez besoin d'utiliser un base de donner contenu dans le fichier maDb.db


# pour apprendre à manipulé cette db avec SQLite, lisez ce lien :
https://python.doctor/page-database-data-base-donnees-query-sql-mysql-postgre-sqlite


# ATTENTION il y a une petite faute dans cette page :


-> db.close() est en fait conn.close()




# votre DB ne comportera qu'une table appeler clients.


# cette table contient les champs suivant : (id, name, rôle, score)


- id est un nombre unique à chaque utilisateur, normalement vous n'aurez pas à le préciser lorsque vous créer votre table
- name est une chaine de caractère d'au moins 2 lettres
- rôle est une chaine de caractère valant soit "admin" soit "user" soit "banni"
- score est un nombre allant de 0 à 10


# déscription des commandes :


- init_db : cette commande crée votre table clients vide dans la db.
- show_all : récupère tout les clients de la db dans une liste puis les affiche un à un à l'aide d'une boucle
- add_client : demande à l'utilisateur d'entrer un nom, un rôle et un score grâce à des input. une fois les 3 valeurs récupèrées, executé le code permettant d'ajouté un nouveau client dans votre table.
- delete_client : demande à l'utilisateur d'entré l'id de la personne à supprimer grâce à un input. si l'utilisateur un id valide, supprimez le client de la db.
- show_client : demande à l'utilisateur d'entré l'id de la personne à afficher grâce à un input.si l'utilisateur un id valide, affichez ses infos.




# bonus:


- intègrer des fonctionalités à l'aide de librairie externe:


- ajouter de la couleur avec colorama. une erreur en rouge et des nouveaux champs dans la db en vert
- afficher un graphique en camenbert avec Matplotlib qui montre la proportion de client, d'admin et de banni (une section de w3school est réservé à ce dernier)






# n'oubliez pas d'ajouter la commande exit et help à votre programme


# si vous rencontré trop de problème avec la db. stocker vos clients dans un tableau à la place.




