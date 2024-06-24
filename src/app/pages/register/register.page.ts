import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';
import { StepperComponent } from 'src/app/core/components/stepper/stepper.component';
import { ContractComponent } from './components/contract/contract.component';
import { PhoneComponent } from './components/phone/phone.component';
import { UserDataComponent } from './components/user-data/user-data.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [
    IonBackButton,
    IonButtons,
    IonRow,
    IonCol,
    IonGrid,
    IonImg,
    IonButton,
    IonContent,
    IonImg,
    IonButton,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    RouterLink,
    TranslateModule,
    PhoneComponent,
    UserDataComponent,
    ContractComponent,
    StepperComponent,
  ],
})
export class RegisterPage {
  public step: number = 1;
  public titleStep: string = '';

  public router = inject(Router);

  handleNameChange(title: string) {
    this.titleStep = title;
  }

  next(step: number) {
    this.step = step;
  }

  back() {
    if (this.step >= 2) {
      this.step--;
    } else {
      this.router.navigate(['/home']);
    }
  }
}
