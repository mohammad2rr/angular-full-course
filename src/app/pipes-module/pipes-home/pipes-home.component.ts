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
  heightInput: number = 0;
  mileInput: number = 0;
  car = {
    model: 'BMW',
    year: 2019,
    type: 's500',
    color: 'blue',
  };

  onNameChange(val: string) {
    this.nameInput = val;
  }

  onDateChange(val: string) {
    this.dateInput = val;
  }

  onAmountChange(val: string) {
    this.amountInput = val;
  }

  onHeightChange(val: number) {
    this.heightInput = val;
  }

  onMileChange(val: number) {
    this.mileInput = val;
  }
}
