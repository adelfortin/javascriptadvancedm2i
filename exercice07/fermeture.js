function makeCompteur(n) {
    let compteur = 0; 
    return {
        count: function() {
            let valeurEnCours = compteur; 
            compteur += n; 
            return valeurEnCours; 
    },
        reset: function() {
            compteur = 0; 
    },
        set: function(valeur) {
            compteur = valeur; 
        }
    };
}
