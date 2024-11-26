let weather = prompt("Quelle temps fait il demain ?");

weather = weather.toLowerCase()

switch(weather) {
    case "pluie":
      alert("Prend un parapluie où tu va etre mouillé")
      break;
    case "soleil":
        alert("Profite de ce beau temps")
      break;
    case "neige":
        alert("Met tes bottes")
      break;
    default:
      alert("Regarde la météo")
  }