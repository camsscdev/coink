import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'ion-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class StepperComponent {
  @Input({ required: true }) public title?: string;
  @Input({ required: true }) public step!: number;
}
