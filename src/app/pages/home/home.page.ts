import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { HeroSectionComoponent } from 'src/app/components';
import { DiscoverComoponent } from 'src/app/components/discover/discover.component';
import { FooterComoponent } from 'src/app/components/footer/footer.component';
import { HeaderComoponent } from 'src/app/components/header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonContent,
    HeroSectionComoponent,
    DiscoverComoponent,
    FooterComoponent,
    HeaderComoponent,
  ],
})
export class HomePage {
  constructor() {}
}
