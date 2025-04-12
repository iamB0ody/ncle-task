import { Component } from '@angular/core';
import { IonCol, IonGrid, IonRow } from "@ionic/angular/standalone";

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.scss'],
  imports: [IonCol, IonGrid, IonRow]
})
export class FooterComoponent {
  constructor() {}
}
