import { Directive, HostListener } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[numericOnly]',
  standalone: true,
})
export class NumericOnlyDirective {
  @HostListener('keypress', ['$event'])
  onKeyPress(event: KeyboardEvent): void {
    const inputChar = event.key;
    const specialKeys = [
      'Backspace',
      'Tab',
      'End',
      'Home',
      'ArrowLeft',
      'ArrowRight',
      'Delete',
    ];

    if (specialKeys.includes(inputChar)) {
      return;
    }

    const isDigit = /\d/.test(inputChar);
    if (!isDigit) {
      event.preventDefault();
    }
  }

  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent): void {
    const clipboardData = event.clipboardData;
    const pastedText = clipboardData?.getData('text') || '';
    const isNumeric = /^\d*$/.test(pastedText);
    if (!isNumeric) {
      event.preventDefault();
    }
  }
}
