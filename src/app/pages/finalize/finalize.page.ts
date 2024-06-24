import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonRow,
} from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';
import { CoinkService } from 'src/app/services/coink.service';

@Component({
  selector: 'app-modal',
  templateUrl: './finalize.page.html',
  styleUrls: ['./finalize.page.scss'],
  standalone: true,
  imports: [
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonContent,
    TranslateModule,
    RouterLink,
    JsonPipe,
  ],
})
export class FinalizePage {
  public userData = inject(CoinkService);
}
