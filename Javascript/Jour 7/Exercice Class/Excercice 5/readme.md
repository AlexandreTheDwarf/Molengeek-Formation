# Exercice 5
 
- Crée une classe Lieu avec la propriété nom(string) et personnes(array vide).
- Crée des instances de Lieu: MolenGeek, Snack et Maison.
- Crée une classe Personne avec les propriétés : nom(string), prénom(string), argent(number) et une méthode seDeplacer().
- Cette méthode permet de te déplacer dans les différents lieux en utilisant la méthode embarquer() du bus.
- Crée une instance de Personnage.
- Crée une classe Bus avec les propriétés : personnes(array vide), caisse(number) et une méthode embarquer().
- Cette méthode est appelée dans la méthode seDeplacer() de la personne. 
- Elle vérifie si tu as assez d'argent, déduit l'argent de ta personne, l'ajoute à sa caisse, et tu entres dans le bus. Le bus coûte 2.80.

- Crée une instance de Bus.

Horaires :
```
8h00 - Maison
8h30 - Prends le bus vers MolenGeek
8h45 - Arrive à MolenGeek
12h45 - Sors de MolenGeek, prends le bus pour le snack
13h30 - Sors du snack, retour à MolenGeek à pied pour digérer
17h10 - Sors de MolenGeek, prends le bus pour rentrer chez toi.
```
- Affiche dans la console ton argent.