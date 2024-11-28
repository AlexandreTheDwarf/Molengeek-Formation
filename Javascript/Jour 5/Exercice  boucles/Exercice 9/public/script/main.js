let tab = [1440, 1511, 1731, 1400, 1542, 1571, 1768, 1730, 1959, 1342, 1744, 872, 1237, 1846, 1597, 1583, 1711, 1499, 1679, 1895, 1875, 1928, 1728, 1673, 481, 1934, 673, 1704, 1916, 1958, 1821, 1649, 1640, 1802, 1732, 121, 1924, 1438, 1748, 1046, 1905, 1566, 1152, 1964, 1518, 1603, 1414, 1785, 1993, 1594, 1761, 1455, 1738, 1699, 1507, 1483, 1450, 1653, 1644, 19, 1340, 1227, 1353, 2009, 1188, 1228, 1898, 1941, 1515, 1766, 1351, 1980, 1378, 1702, 1620, 1729, 1279, 1384, 1894, 1770, 1853, 1161, 1970, 1986, 1669, 1938, 1602, 1190, 1822, 425, 1750, 1632, 1613, 1805, 1718, 1990, 1762, 1242, 1485, 1598, 1893, 1995, 1823, 1786, 1506, 1464, 1467, 1639, 1674, 1903, 1961, 1478, 1847, 1760, 1997, 2010, 899, 2000, 1488, 1243, 1891, 1504, 1693, 1176, 1391, 1563, 692, 1497, 1428, 1745, 1368, 1723, 1989, 1930, 1171, 1840, 1372, 1987, 1952, 1842, 1967, 1759, 1929, 1945, 1919, 1333, 1692, 1811, 1221, 1520, 1920, 1093, 1618, 1795, 1686, 1369, 1820, 1857, 1356, 1562, 2004, 1519, 1628, 1831, 1687, 1792, 1948, 927, 1789, 1546, 1338, 1614, 1472, 1494, 1979, 1936, 1577, 1147, 1446, 1683, 1375, 856, 1787, 1517, 1724, 1334, 1642, 1496, 1668, 1725, 1800, 1708, 1814, 1585, 1827, 1801, 1208, 1839, 1596, 1925];

// Trouve la combinaison de deux nombres dont le résultat est “2020”.

tab.forEach(element => {
    let nbrToFind = 2020 - element; // On calcule le nombre complémentaire pour faire 2020

    // On cherche si le nombre complémentaire existe dans le tableau
    if (tab.includes(nbrToFind) && nbrToFind !== element) {
        console.log(element + " + " + nbrToFind);
    }
});

// Trouve la combinaison de trois nombres dont le résultat est “2020”.

tab.forEach((element, index) => {
    let nbrToFind = 2020 - element; // Calcul de ce qu'il faut trouver pour compléter la somme de 2020
    // On va maintenant rechercher deux autres nombres dans le tableau qui complètent la somme
    for (let j = index + 1; j < tab.length; j++) {
        let secondNbr = tab[j]; // Le deuxième nombre à vérifier
        let thirdNbr = nbrToFind - secondNbr; // Le troisième nombre nécessaire

        // On vérifie si le troisième nombre existe dans le tableau après `j`
        if (tab.includes(thirdNbr) && thirdNbr !== element && thirdNbr !== secondNbr) {
            console.log(element + " + " + secondNbr + " + " + thirdNbr);
        }
    }
});

