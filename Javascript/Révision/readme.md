# # Exercice compliqué

Note : L'exercice suivant comporte un objet, l'utilisation d'une class n'est pas nécessaire 

### Exercice uniquement sur un objet

- Créer un objet Personnage avec des propriétés : 
    - idendite:{nom, prenom}
    - argent
    - lieu
    - humeur 
- une méthode propre à l'objet qui va changer son humeur aléatoirement.(Soit positif, soit négatif)
- Créer une fonction (attention ce n'est pas une méthode propre à l'objet mais belle est bien une FONCTION classique) qui va permettre au personnage de changer son lieu. De base, il est chez lui, par la fonction, il se déplacera à son lieu de travail.
- Créer une autre fonction qui va lui permettre de gagner de l'argent. Il gagnera 10€ pour 8 heure si son humeur est négative. Par contre il gagnera 15€ pour 8heures si son humeur est positive. (Une itération vaut 1 heure).
- (Bonus:faite en sorte qu'une itération se fasse tous les 2sec)
- Pour la fonction qui lui permet de gagner de l'argent, si son humeur est positive, tous les 2 heures, il dira via une console.log : "J'aime mon travail", mais par contre si son humeur est négative, il dira "je préfére mon lit"


Note : L'exercice suivant comporte plusieurs objets semblable, l'utilisation d'une class est judicieux 

#### Exercice avec class

- Créer une class "LeeGofGeek" avec 4 propriétés : 
    - le nom du personnage, 
    - le nom de son pouvoir, 
    - dégats qu'il produit (en numbre), 
    - santé (en numbre),
    - bonus

- Créer 2 instances de "LeeGofGeek" (2personnages). Chaque personnage à ses propriétés bien défini. C-à-d que son pouvoir a un nom spécifique, les dégats sont précis(max 15points). Sa santé est, par défaut, à 100 points.

- Créer une méthode propre à l'objet et nommé le "attaqueBasic". Une fois cette méthode appelée, il retire des points de vie au personnage attaqué. Ces points de vie retirés sont calculés par rapport à la propriété  "degat" du personnage qui lance l'attaque. 
    - Ex : personnage1 lance une attaque(dégat=15points), personnage2 perd 15points de vie.

- Créer une méthode "attaqueSpecial" qui consiste à mettre des dégats +- important sur l'autre personnage. (-35point). Par contre cette attaque enlève en contre partie -15point à son utilisateur.

- Créer deux méthodes spécial "auto-save" & "joker"
    - la méthode "auto-save", qui une fois lancé permet de rajouter 35 points de vie à son utilisateur, mais en contre partie, lui fait perdre l'accès à la méthode "joker"
    - la méthode "joker" est très particuliere. Elle sera utilisable que si le point de vie de l'utilisateur est à < 15 point. Par contre si vous l'utilisez, vous perdez l'accès à votre méthode autoSave.
        - Cette méthode consiste a appeler un bonus aléatoire prédéfinis dans un array "bonus". Dans ces bonus, il y'a "VieFull" qui permet de revenir à 100 points de vie. l y'a une attaque nommé "dead" qui permet d'eliminer l'ennemie du 1er coup. Il y'a un bonus nommé "null" qui donne aucun pouvoir.

- Autrement dit, c'est soit la méthode "joker" soit la méthode "autoSave"
- Une fois que la vie d'un des personnages tombe à zero, une alert s'affiche pour dire que la partie est terminé.

- Le récit : Vous le faites sans prompt et alert. Tout ce passe manuellement dans le code et chaque message/bout_de_récit est affichée via une console.log.