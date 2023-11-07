function atLeastTwo(tableau, callback) {
    let compteurValeursVraies = 0;
    for (let i = 0; i < tableau.length; i++) {
        if (callback(tableau[i])) {
            compteurValeursVraies++;
            if (compteurValeursVraies >= 2) {
                return true;
            }
        }
    }
    return false;
}

document.getElementById('boutonTester').addEventListener('click', function() {
    let entree = document.getElementById('entreeTableau').value;
    let tableau = entree.split(',').map(Number);
    let resultat = atLeastTwo(tableau, x => x > 4); 
    document.getElementById('resultatTest').textContent = resultat;
});

