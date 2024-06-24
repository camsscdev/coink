import { AbstractControl, ValidationErrors } from '@angular/forms';

export function fieldsMatchValidator(field1: string, field2: string) {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const value1 = formGroup.get(field1)?.value;
    const value2 = formGroup.get(field2)?.value;

    if (value1 !== value2) {
      formGroup.get(field2)?.setErrors({ notEqual: true });
      return { notEqual: true };
    }
    formGroup.get(field2)?.setErrors(null);
    return null;
  };
}
