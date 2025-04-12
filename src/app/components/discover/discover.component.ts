import { Component } from '@angular/core';
import { IonButton, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { Step } from 'src/app/utils';

@Component({
  selector: 'app-discover',
  templateUrl: 'discover.component.html',
  styleUrls: ['discover.component.scss'],
  imports: [IonGrid, IonButton, IonRow, IonCol],
})
export class DiscoverComoponent {
  constructor() {}

  public readonly steps: Step[] = [
    {
      icon: 'assets/images/step-1.png',
      title: 'Subscribe',
      description:
        "Select a subscription plan that suits your child's learning needs and preferences.",
    },
    {
      icon: 'assets/images/step-2.png',
      title: 'Personalise Your Box',
      description:
        "Tell us about your child's age, interests, and learning goals, and we'll customize their surprise box accordingly.",
    },
    {
      icon: 'assets/images/step-3.png',
      title: 'Receive Your Surprise Box',
      description:
        'Sit back and relax as your child eagerly awaits the arrival of their monthly surprise box filled with engaging learning materials.',
    },
  ];
}
