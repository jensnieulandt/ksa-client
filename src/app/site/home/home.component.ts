import {Component, OnInit} from '@angular/core';
import {Article} from './article.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articles: Article[] = [
    new Article(
      'Wie zijn wij?',
      '<p><b>KSA Parsival</b> is de leukste, de tofste en de actiefste Edegemse jeugdbeweging voor jongens. Wij staan <b>elke zaterdagnamiddag van 14u tot 17u</b> klaar om de plezantste dingen te doen! Onze leden komen van overal, maar omdat wij de jeugdbeweging van het OLVE-college zijn, komt de meerderheid van de leden uit dit college.</p> <p> Wij zijn een katholieke (de K van KSA) actie (de A) die volledig draait dankzij een leuke groep van leiders die nog studerende (de S!) zijn. </p> <p> Met onze KSA maken wij deel uit van een grotere organistie, namelijk <b>KSA Antwerpen (Provinciaal)</b>. Zij zorgen voor ondersteuning die wij nodig hebben voor onze gewone bezigheden. De overkoepelende organisatie voor alle provinciale werkingen van <b>Vlaanderen is KSA Nationaal</b>, zij houden zich ook bezig met ondersteuning te geven aan plaatselijke groepen.</p>',
    ),
    new Article(
      'Waar kan je ons vinden?',
      '<p>Onze lokalen vind je aan het Fort V, één van de mooiste en rustigste plekjes in de buurt.</p> <p> We kunnen er naar hartelust ravotten en spelen. We moeten zelfs geen straat over steken!</p> <p> Eén juist adres: J.De Roorestraat 2, 2650 Edegem.</p>',
    ),
    new Article(
      'En wat met de meisjes?',
      ' <p>KSA Parsival is er inderdaad alleen maar voor de jongens, maar wij werken nauw samen met KSA Molenveld en deze jeugdbeweging is er alleen voor de meisjes. Zij hebben hun lokaal ook in het Fort V, aan de Parklaan. Ook zij hebbben hun vergadering elke zaterdagnamiddag.</p> <p> Bezoek hun website op<br><br><a href="http://www.ksamolenveld.be/">www.ksamolenveld.be</a></p>',
    ),
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
