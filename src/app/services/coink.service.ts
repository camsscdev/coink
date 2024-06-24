import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { DocumentTypes, UserData } from '../models/coink.interface';

@Injectable({
  providedIn: 'root',
})
export class CoinkService {
  public http = inject(HttpClient);

  public jsonGender = '../../assets/json/gender.json';
  public jsonDocumentTypes = '../../assets/json/documentTypes.json';

  userData = signal<UserData>({
    documentType: '',
    documentNumber: '',
    documentShipping: '',
    dateBirth: '',
    gender: '',
    email: '',
    repeatEmail: '',
    securityPin: '',
    securityPinRepeat: '',
    phoneNumber: 0,
  });

  // getTypeDocument(): Observable<DocumentTypes[]> {
  //   return this.http.get<DocumentTypes[]>(
  //     `${environment.apiUrl}documentTypes?${environment.apiKey}`
  //   );
  // }

  getTypeDocument(): Observable<DocumentTypes[]> {
    return this.http.get<DocumentTypes[]>(this.jsonDocumentTypes);
  }

  getGender(): Observable<any> {
    return this.http.get(this.jsonGender);
  }
}
