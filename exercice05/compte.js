function CompteBancaire(titulaire, solde) {
    this.titulaire = titulaire;
    this.solde = solde;

    this.afficher = function() {
        console.log(`Titulaire: ${this.titulaire}, Solde: ${this.solde} €`);
    };

    this.crediter = function(montant) {
        this.solde += montant;
        console.log(`Nouveau solde après crédit: ${this.solde} €`);
    };

    this.debiter = function(montant) {
        this.solde -= montant;
        console.log(`Nouveau solde après débit: ${this.solde} €`);
    };
}

function CompteEpargne(titulaire, solde, taux) {
    CompteBancaire.call(this, titulaire, solde);
    this.taux = taux;

    this.interets = function() {
        let interets = this.solde * this.taux / 100;
        console.log(`Intérêts: ${interets} €`);
        return interets;
    };
}

CompteEpargne.prototype = Object.create(CompteBancaire.prototype);
CompteEpargne.prototype.constructor = CompteEpargne;

