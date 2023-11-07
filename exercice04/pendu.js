function Pendu(motATrouver, nbEssais) {
    this.motATrouver = motATrouver.toUpperCase();
    this.nbEssais = parseInt(nbEssais) || 10;
    this.essaisRestants = this.nbEssais; 
    this.lettresEssayees = {};

    this.genererMasque = function() {
        return this.motATrouver.replace(/./g, '_');
    };

    this.masque = this.genererMasque();

    this.testerLettre = function(lettre) {
        lettre = lettre.toUpperCase();
        if (this.lettresEssayees[lettre]) {
            return "Lettre déjà essayée";
        }

        this.lettresEssayees[lettre] = true;

        if (this.motATrouver.indexOf(lettre) > -1) {
            var masqueArray = this.masque.split('');
            for (var i = 0; i < this.motATrouver.length; i++) {
                if (this.motATrouver[i] === lettre) {
                    masqueArray[i] = lettre;
                }
            }
            this.masque = masqueArray.join('');
            return this.verifierGagne() ? "Gagné" : "Lettre correcte";
        } else {
            this.essaisRestants--;
            return this.essaisRestants > 0 ? "Lettre incorrecte" : "Perdu";
        }
    };

    this.verifierGagne = function() {
        return this.masque === this.motATrouver;
    };
}


