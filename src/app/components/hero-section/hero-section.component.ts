import { Component } from '@angular/core';
import { IonButton, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { HeaderComoponent } from '../header/header.component';

@Component({
  selector: 'app-hero-section',
  templateUrl: 'hero-section.component.html',
  styleUrls: ['hero-section.component.scss'],
  imports: [IonButton, IonGrid, IonRow, IonCol, HeaderComoponent]
})
export class HeroSectionComoponent {
  constructor() {}
}
