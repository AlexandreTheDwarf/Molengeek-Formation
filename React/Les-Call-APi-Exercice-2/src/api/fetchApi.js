export const getAllCountryData = async () => {
  const response = await fetch("https://restcountries.com/v3.1/all");
  
  if (!response.ok) {
      throw new Error(`HTTP error: Status ${response.status}`);
  }

  const data = await response.json();

  // Trier les pays par ordre alphabétique en fonction du nom commun
  return data.sort((a, b) => a.name.common.localeCompare(b.name.common));
};
