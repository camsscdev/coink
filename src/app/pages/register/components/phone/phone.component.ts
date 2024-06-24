import { NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { output } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonNote,
  IonRow,
} from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';
import { NumericOnlyDirective } from 'src/app/directives/onlyNumeric.directive';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss'],
  standalone: true,
  imports: [
    IonImg,
    IonNote,
    IonRow,
    IonCol,
    IonGrid,
    IonButton,
    IonLabel,
    IonIcon,
    IonItem,
    IonInput,
    IonContent,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    NumericOnlyDirective,
    RouterLink,
    TranslateModule,
  ],
  providers: [],
})
export class PhoneComponent implements OnInit {
  public step = output<number>();
  public title = output<string>();

  public phoneForm!: FormGroup;
  public isFormValid: boolean = false;

  private fb = inject(FormBuilder);

  ngOnInit(): void {
    this.initForm();
    this.title.emit('NÚMERO CELULAR');
  }

  onSubmit() {
    if (this.phoneForm.valid) {
      this.step.emit(2);
    }
  }

  initForm() {
    this.phoneForm = this.fb.group({
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    });

    this.phoneForm.valueChanges.subscribe(() => {
      this.isFormValid = this.phoneForm.valid;
    });
  }
}
