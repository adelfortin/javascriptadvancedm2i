function inverserChaine(chaine) {
    return chaine.split('').reverse().join('');
}

document.getElementById('boutonInverser').addEventListener('click', function() {
    let chaineEntree = document.getElementById('entreeTexte').value;
    let chaineInverse = inverserChaine(chaineEntree);
    document.getElementById('resultat').textContent = chaineInverse;
});

