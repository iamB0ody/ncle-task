import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonButton, IonCol, IonGrid, IonRow } from '@ionic/angular/standalone';

@Component({
  selector: 'app-hero-section',
  templateUrl: 'hero-section.component.html',
  styleUrls: ['hero-section.component.scss'],
  imports: [IonButton, IonGrid, IonRow, IonCol, RouterModule],
})
export class HeroSectionComoponent {
  constructor() {}
}
