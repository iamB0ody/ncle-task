import { Component } from '@angular/core';
import {
  IonButton,
  IonCheckbox,
  IonCol,
  IonContent,
  IonGrid,
  IonInput,
  IonLabel,
  IonRadio,
  IonRadioGroup,
  IonRow,
  IonSelect,
  IonSelectOption,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronDownOutline, chevronUpOutline } from 'ionicons/icons';

import { HeaderComoponent } from 'src/app/components/header/header.component';

@Component({
  selector: 'app-subscribe',
  templateUrl: 'subscribe.page.html',
  styleUrls: ['subscribe.page.scss'],
  imports: [
    IonButton,
    IonRadioGroup,
    IonGrid,
    IonRow,
    IonCol,
    IonContent,
    IonLabel,
    IonInput,
    HeaderComoponent,
    IonSelect,
    IonSelectOption,
    IonRadio,
    IonCheckbox,
  ],
})
export class SubscribePage {
  constructor() {
    addIcons({
      chevronDownOutline,
      chevronUpOutline,
    });
  }

  public readonly days = Array.from({ length: 30 }, (_, i) => i + 1);
  public readonly months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  public readonly years = Array.from({ length: 10 }, (_, i) => 2023 + i);

  public readonly grades = [
    'Grade 1',
    'Grade 2',
    'Grade 3',
    'Grade 4',
    'Grade 5',
  ];

  public readonly options = ['Arabic', 'Islam', 'English', 'History', 'Sports'];
}
