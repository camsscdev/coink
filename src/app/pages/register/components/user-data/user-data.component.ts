import { JsonPipe, NgClass, NgFor, NgIf } from '@angular/common';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  OnInit,
  inject,
  output,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { NumericOnlyDirective } from 'src/app/directives/onlyNumeric.directive';
import { DocumentTypes } from 'src/app/models/coink.interface';
import { CoinkService } from 'src/app/services/coink.service';
import { fieldsMatchValidator } from 'src/app/validators/fields-match-validator';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss'],
  standalone: true,
  imports: [
    NumericOnlyDirective,
    ReactiveFormsModule,
    NgIf,
    NgFor,
    NgClass,
    JsonPipe,
    TranslateModule,
    IonicModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UserDataComponent implements OnInit {
  public step = output<number>();
  public title = output<string>();
  public coinkService = inject(CoinkService);
  public fb = inject(FormBuilder);

  public FieldRequired = 'Campo requerido';
  public FieldNotMatch = 'El valor del campo no coincide';
  public documentTypes!: DocumentTypes[];
  public formUser!: FormGroup;
  genders!: any[];

  ngOnInit(): void {
    this.title.emit('DATOS DE CUENTA');
    this.getDocumentTypes();
    this.getGender();
    this.initForm();
    this.formUser.markAllAsTouched();

    // userData;
  }

  get f() {
    return this.formUser?.controls;
  }

  getDocumentTypes() {
    this.coinkService
      .getTypeDocument()
      .subscribe((documentType) => (this.documentTypes = documentType));
  }

  getGender() {
    this.coinkService
      .getGender()
      .subscribe((gender) => (this.genders = gender));
  }

  initForm() {
    this.formUser = this.fb.group(
      {
        documentType: ['', Validators.required],
        documentNumber: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(10),
            Validators.pattern('^[0-9]{10}$'),
          ],
        ],
        documentShipping: ['', Validators.required],
        dateBirth: ['', Validators.required],
        gender: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        repeatEmail: ['', [Validators.required, Validators.email]],
        securityPin: ['', [Validators.required, Validators.maxLength(4)]],
        securityPinRepeat: ['', [Validators.required]],
      },
      {
        validators: [
          fieldsMatchValidator('email', 'repeatEmail'),
          fieldsMatchValidator('securityPin', 'securityPinRepeat'),
        ],
      }
    );
  }

  onNext() {
    this.step.emit(3);
    this.coinkService.userData.set(this.formUser.value);
  }
}
