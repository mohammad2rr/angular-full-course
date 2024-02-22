import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-home',
  templateUrl: './pipes-home.component.html',
  styleUrls: ['./pipes-home.component.css'],
})
export class PipesHomeComponent {
  nameInput: string = '';
  dateInput: string = '';
  amountInput: string = '';

  onNameChange(val: string) {
    this.nameInput = val;
  }

  onDateChange(val: string) {
    this.dateInput = val;
  }

  onAmountChange(val: string) {
    this.amountInput = val;
  }
}
