# exercice CLasse

## Créez une classe de base appelée Animal :

- Elle doit avoir un constructeur (__init__) qui prend un argument nom et l'initialise comme attribut de l'objet.
- Elle doit avoir une méthode faire_son() qui affiche un message générique indiquant que l'animal fait un son (par exemple : "Cet animal fait un son.").
- Elle doit avoir une méthode se_deplacer() qui affiche un message générique indiquant que l'animal se déplace (par exemple : "Cet animal se déplace.").

## Créez une sous-classe appelée Chien qui hérite de Animal :

- Son constructeur (__init__) doit appeler le constructeur de la classe parente (Animal) en utilisant super().
- Redéfinissez la méthode faire_son() pour qu'elle affiche "Wouf ! Wouf !".
- Ajoutez une nouvelle méthode spécifique à la classe Chien appelée japper() qui affiche "Le chien jappe joyeusement !".

## Créez une autre sous-classe appelée Oiseau qui hérite de Animal :

- Son constructeur (__init__) doit appeler le constructeur de la classe parente (Animal) en utilisant super().
- Redéfinissez la méthode faire_son() pour qu'elle affiche "Cui cui !".
- Redéfinissez la méthode se_deplacer() pour qu'elle affiche "Cet oiseau vole dans le ciel.".

## Créez des instances des classes Chien et Oiseau :

- Créez un objet chien1 de la classe Chien avec le nom "Rex".
- Créez un objet oiseau1 de la classe Oiseau avec le nom "Pico".

## Appelez les méthodes sur les instances créées :

- Appelez faire_son() et se_deplacer() sur chien1.
- Appelez japper() sur chien1.
- Appelez faire_son() et se_deplacer() sur oiseau1.
