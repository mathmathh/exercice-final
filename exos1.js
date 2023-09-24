"use strict"

/*
 Exo 1: Le taxi John essaie de rentrer chez lui en taxi.
  Problème : Il a horreur d'écouter Anissa de Weidene qui passe tout le temps à la radio.
   Des qu'il entend cette musique, il perd 1 de santé mentale et change de taxi.
   Partons du principe qu'une musique se change à chaque feu rouge qu'il rencontre et qu'il est à 30 feux rouges de chez lui. 
   À chaque feu rouge, afficher la musique jouée + le nombre de feux restants. 
   Deux possibilités de fin: - si il a passé les 30 feux rouges, il est arrivé à destination et donc affiche
    qu'il est bien arrivé et qu'il lui a fallu x changements de taxi pour y arriver - Sa santé mentale tombe à 0, 
    il explose et donc affiche « explosion » Nous avons besoin d'un Personnage avec un prénom et une santé mentale à 10. 
    Nous avons besoin d'une liste de 5 musiques dont Anissa-Wejdene Nous avons besoin d'un Trajet avec une radio, 
    30 feux rouges et un nombre de changements
*/

//on creé les variables
let santementale= 10;
let feurouge=1;
let taxi=1;

const musique = ["anissa de wejdene","mode avion de fave","galatée de nekfeu","nouvelle de plk","1234 de gambi"];
//fonction pour que la musique soit mise de facons aleatoire
function musiquealeatoire() {// nombre compris entre 0et 4 aleatoirement representant les 5 musique possible 
    const aleatoire = Math.floor(Math.random()* musique.lenght);
    return musique [aleatoire];

}
//effet de la musique sur la santé mentale ,les degats 
while (santementale > 0 &&feurouge <= 30) {
    const musique = musiquealeatoire();
    console.log('john est a un feu rouge avec comme musique : ${musique} ');
    console.log("santé mentale de john : ${santementale}");
    console.log("nombre de feu rouge : ${feurouge}");
// la musique d anissa fait perdre 1 de santé mentale et le fait prendre un autre taxi 
if (musique== "anissa de wejdene"){
    santementale -=1// sa santé mentale baisse de 1 
    taxi +=1// Le nombre de taxi augmente de 1
    console.log("il change de taxi");
}

feurouge++;
}
//si sa sante mentale atteint 0 il ne rentre pas chez lui le programe s arrete 
if ( santementale<= 0) {
    console.log("sa tete explose");

}
else if  ( feurouge ==31){
        console.log("john est arrivé a sa destination avec pour santé mentale de"+ santementale);//message final nous montrant l etat de john 
        //et ainci si il y a victoire ou echecs 


}

