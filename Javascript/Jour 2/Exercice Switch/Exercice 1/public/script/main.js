let day = prompt("Quelle jour sommes nous ?");

day = day.toLowerCase()

switch(day) {
    case "lundi":
      alert("Tu as cours comme d'habitude, et tu as water polo")
      break;
    case "mardi":
        alert("Tu as cours comme d'habitude, et tu as rien aujourd'hui")
      break;
    case "mercredi":
        alert("Tu as cours comme d'habitude, et madame a cours donc tu l'as voit pas")
      break;
    case "jeudi":
        alert("Tu as cours comme d'habitude, et madame a cours, mais tu peux passer a yruld")
      break;
    case "vendredi":
        alert("Tu as cours comme d'habitude, soirée a yruld")
      break;
    case "samedi":
        alert("Comme d'hab chez maman au matin chez les beaux parents aprés midi")
      break;
    case "dimanche":
        alert("Tu n'as rien donc pour une fois fait ce que tu veux")
      break;
    default:
      alert("Ce n'est pas un jour de la semaine")
  }