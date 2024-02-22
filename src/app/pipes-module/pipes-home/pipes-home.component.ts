import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-home',
  templateUrl: './pipes-home.component.html',
  styleUrls: ['./pipes-home.component.css'],
})
export class PipesHomeComponent {
  nameInput: string = '';
  onNameChange(val: string) {
    console.log(val);
    this.nameInput = val;
  }
}
