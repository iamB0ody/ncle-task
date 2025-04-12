import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { FooterComoponent } from 'src/app/components/footer/footer.component';
import { HeaderComoponent } from 'src/app/components/header/header.component';

@Component({
  selector: 'app-subscribe',
  templateUrl: 'subscribe.page.html',
  styleUrls: ['subscribe.page.scss'],
  imports: [IonContent, FooterComoponent, HeaderComoponent],
})
export class SubscribePage {
  constructor() {}
}
