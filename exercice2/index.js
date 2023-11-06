function doublerLesCaracteres(chaine) {
    return chaine.split('').map(char => char.repeat(2)).join('');
}

document.getElementById('boutonDoubler').addEventListener('click', function() {
    let chaineEntree = document.getElementById('entreeTexte').value;
    let chaineDoublee = doublerLesCaracteres(chaineEntree);
    document.getElementById('resultat').textContent = chaineDoublee;
});

