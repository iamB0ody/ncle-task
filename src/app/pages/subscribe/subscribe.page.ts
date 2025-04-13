import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
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
import { Observable, startWith } from 'rxjs';

import { HeaderComoponent } from 'src/app/components/header/header.component';
import { IsTopicSelectedPipe } from 'src/app/pipes';
import { Days, Grades, Months, Topics, Years } from 'src/app/utils';

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
    CommonModule,
    ReactiveFormsModule,
    IsTopicSelectedPipe,
  ],
})
export class SubscribePage {
  constructor(private readonly fb: FormBuilder) {
    addIcons({
      chevronDownOutline,
      chevronUpOutline,
    });
  }

  public form: FormGroup = this.buildform();

  public readonly days: Days = Array.from({ length: 30 }, (_, i) => i + 1);

  public readonly months: Months = [
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
  public readonly years: Years = Array.from({ length: 10 }, (_, i) => 2023 + i);

  public readonly grades: Grades = [
    'Grade 1',
    'Grade 2',
    'Grade 3',
    'Grade 4',
    'Grade 5',
  ];

  public readonly topics: Topics = [
    'Arabic',
    'Islam',
    'English',
    'History',
    'Sports',
  ];

  public topics$: Observable<string[]> = this.form
    .get('topics')
    ?.valueChanges.pipe(
      startWith(this.form.get('topics')?.value ?? [])
    ) as Observable<string[]>;

  public buildform() {
    return this.fb.group({
      name: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      childName: this.fb.control('', [Validators.required]),
      day: this.fb.control('', [Validators.required]),
      month: this.fb.control('', [Validators.required]),
      year: this.fb.control('', [Validators.required]),
      grade: this.fb.control('', [Validators.required]),
      gender: this.fb.control('boy', [Validators.required]),
      topics: this.fb.control(['Sports'], [Validators.required]),
    });
  }

  public onTopicsChange(event: any) {
    console.log(event);
    const control = this.form.get('topics') as FormControl;
    let topics: string[] = control.value ?? [];

    if (event.detail.checked) {
      topics.push(event.detail.value);
    } else {
      topics = topics.filter((topic) => topic !== event.detail.value);
    }
  }

  public continue() {
    console.log(this.form.value);
    this.form.markAllAsTouched();
    this.form.markAsDirty();
  }
}
