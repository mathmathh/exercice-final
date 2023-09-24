"use strict"
 
/*
* 1 tueur "Jason" avec 100pv.(apres une atttaque soit le survivant meurt,ou il esquive et lui provoque 10 de degats
     sinon il meur en lui mettant 15 de degats)  
les personne n ayant pas survecue apparaissent a la fin. 
les personage on individuellement des caracteristiques etdes probabilités de mourir , provoquer des degats ou les deux ;
5 survivants avec nom généré aléatoirement d'un tableau de prénoms 
 pour chaque action on attend des anonces telque  :Jason a tué ..., ...a esquivé et a infligé ... dmg,
ou jason est mort !Donc les survivants restants sont ... ;ou alors tout le monde est mort
*/

// Creation des variables (nom des pesonnages leur caracteristiques leurs stats et celle du tueur jason )



let caracteristiques = ["nerd","sportif","blonde","rapid","grand"];
let prenom = ["bob","boule","bill","sid","sam"];
let stats = [[0.1,0.6,0.3],[0.4,0.1,0.5],[0.3,0.6,0.1],[0.4,0.1,0.6],[0.3,0.3,0.4]];//il faut que l enssemble des stats soit egales a 1
let joueurs = [];
let survivantmort = [];
let tueur = ["jason",50];//baisser a 50 sinon personnage jason trop fort


class personnage {
    constructor (nom, caracteristiques, probmeurt ,probdeg, probdegmeurt){
        this.nom = nom;
        this.caracteristiques = caracteristiques;
        this.probmeurt = probmeurt;
        this.probdeg = probdeg;
        this.probdegmeurt = probdegmeurt;
    }
}
//creation de la fonction combat (bilan de chaque combat)
function combat() {
    let affichagemort = ""

    if(joueurs.lenght >= 1 && tueur[1] > 0) {
        let nbrsurvivantaleatoire = Math.floor(Math.random() = joueur.lenght);
        console.log(nbrsurvivantaleatoire);
        let survivantcible = jours[nbrsurvivantaleatoire];
        attaqueTueur(survivantcible, nbrsurvivantaleatoire);

    }else if (joueur.lenght>= 1 && tueur[1] <=0) {

        for (let i = 0; i < survivantmort.length; i++) {
            let test = survivantmort [i];

            if(test == survivantmort[survivantmort.length - 1]) {
                affichageMort += `et ${test}.`;   
            }
        }
        console.log("jason est mort !Donc les survivants restants sont ... ");

    }else if (joueur.lenght == 0 && tueur[1] > 0){
        console.log("jason a gagné, il ne reste donc plus aucun survivant.");

    }else {
        console.log("tout le monde est mort...");
    }
}
//creation de la fonction attaque (details des combat avec detail des degats)
function attaqueTueur(survivantcible, nbrsurvivantaleatoire) {
    let valeuraleatoire = Math.random()

    if (valeuraleatoire < survivantcible ["probmeurt"]) {
        console.log("jason a tué",survivantcible["nom"]);
        survivantmort.push(survivantcible["nom"]);
        joueur.splice(nbrsurvivantaleatoire, 1);
        

    }else if (survivantcible["probmeurt"] + survivantcible["probadeg"] < valeuraleatoire) {
        console.log(survivantcible ["nom"],"esquive et met 10 de degats a jason !" );
        tueur[1]-=10;

    }else if (survivantcible["probmeurt"] < valeuraleatoire) {
        console.log(survivantcible["nom"], "se sacrifoe et met 15 degats a jason !");
        tueur[1] -= 15;
        survivantmort.push(survivantcible["nom"]);
        joueur.splice(nbrsurvivantaleatoire, 1);
    }        

    console.log("survivants morts :", survivantmort);
    combat()
    

   
};
 // , des stats et une caracteristique pour chaque nom dans le tableau vont chacune etre mise dans une variable.

prenoms.forEach(nom => { 
    let i = Math.floor(Math.random() * caractéristiques.length); // entre parenthese nombre entre 0 et 4 representant les index
    let caractéristique = caractéristiques.splice(i, 1);         //  un element du tableau caracteristique de l index j est prit puis retiré du tableau

    let j = Math.floor(Math.random() * stats.length);            // entre parenthese nombre entre 0 et 4 representant les index
    let statPerso = stats.splice(j, 1);                          // un element du tableau caracteristique de l index j est prit puis retiré du tableau

    let joueur = new Personnage(nom, caractéristique, statPerso[0][0], statPerso[0][1], statPerso[0][2]);
    joueurs.push(joueur)
});

combat()


