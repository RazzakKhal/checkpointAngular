import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'checkpointAngular';
  personnages : any;
  citationPerso : any;

  constructor(){
    this.recupCitations();
  }



 async recupCitations(){

  // récupération des quotes
   let reponse = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=6');
   let data = await reponse.json();

   // récupération des personnages

   let persos = data.map((quote : any) => quote.character);

   // filtrage du tableau pour ne laisser qu'une occurence de chaque perso

   let persoFilter = persos.filter((charac : any, index : any) => persos.indexOf(charac) === index );
console.log(persoFilter);
   // recuperation des personnages pour les utiliser dans le HTML
   this.personnages = persoFilter;
  }


  async recupCitationPerso(perso : any){
let reponse = await fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?character=${perso}`);
let data = await reponse.json();

console.log(data[0].quote);
//récupération de la citation perso pour l'afficher dans le HTML si besoin
this.citationPerso = data;


  }

}
