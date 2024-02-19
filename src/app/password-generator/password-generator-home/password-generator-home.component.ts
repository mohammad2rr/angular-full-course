import { Component } from '@angular/core';

@Component({
  selector: 'app-password-generator-home',
  templateUrl: './password-generator-home.component.html',
  styleUrls: ['./password-generator-home.component.css'],
})
export class PasswordGeneratorHomeComponent {
  isNumbersIncluded: boolean = false;
  isSymbolsIncluded: boolean = false;
  islettersIncluded: boolean = false;
  length: number = 0;
  password: string = '';
  constructor() {}

  onlengthChanged(value: any) {
    if (!isNaN(value)) {
      this.length = parseInt(value);
    }
  }

  onPassGeneratorBtnClicked() {
    const numbers = '0123456789';
    const letters = 'zxcvbnmasdfghjklqwertyuiop';
    const symbols = '!@#$%^&*()_+|';
    let validCharacter = '';
    let generatedPassword = '';

    if (this.isNumbersIncluded) {
      validCharacter += numbers;
    }
    if (this.isSymbolsIncluded) {
      validCharacter += symbols;
    }
    if (this.islettersIncluded) {
      validCharacter += letters;
    }

    for (let i = 0; i < this.length; i++) {
      let index = Math.floor(Math.random() * validCharacter.length);
      generatedPassword += validCharacter[index];
    }
    this.password = generatedPassword;
  }
}
