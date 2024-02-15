class Personnage {
    constructor(nom, vie, force) {
        this.nom = nom;
        this.vie = vie;
        this.force = force;
    }

    attaquer(cible) {
        let degats = this.force;
        cible.vie -= degats;
        console.log(`${this.nom} attaque ${cible.nom} et inflige ${degats} points de dégâts.`);
    }
}

class Guerrier extends Personnage {
    constructor(nom, vie, force, armure) {
        super(nom, vie + armure, force); 
        this.armure = armure;
    }

    attaquer(cible) {
        let degats = this.force; 
        cible.vie -= degats;
        console.log(`${this.nom} (Guerrier) attaque ${cible.nom} et inflige ${degats} points de dégâts.`);
    }
}

class Magicien extends Personnage {
    constructor(nom, vie, force, mana) {
        super(nom, vie, force);
        this.mana = mana;
    }

    attaquer(cible) {
        let degats = this.force + this.mana;
        cible.vie -= degats;
        console.log(`${this.nom} (Magicien) attaque ${cible.nom} et inflige ${degats} points de dégâts.`);
    }

    static soigner(personnage, mana) {
        personnage.vie += mana;
        console.log(`${personnage.nom} est soigné et récupère ${mana} points de vie.`);
    }
}


