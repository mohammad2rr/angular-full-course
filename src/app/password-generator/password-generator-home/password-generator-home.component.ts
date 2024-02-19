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

  onPassGeneratorBtnClicked() {
    const numbers = '0123456789';
    const letters = 'zxcvbnmasdfghjklqwertyuiop';
    const symbols = '!@#$%^&*()_+|';
  }
}
