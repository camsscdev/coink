export interface DocumentTypes {
  id: number;
  notation: string;
  description: string;
}

export interface UserData {
  documentType: string;
  documentNumber: string;
  documentShipping: string;
  dateBirth: string;
  gender: string;
  email: string;
  repeatEmail: string;
  securityPin: string;
  securityPinRepeat: string;
  phoneNumber: number;
}
