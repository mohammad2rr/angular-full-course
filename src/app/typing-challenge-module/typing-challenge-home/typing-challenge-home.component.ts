import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-typing-challenge-home',
  templateUrl: './typing-challenge-home.component.html',
  styleUrls: ['./typing-challenge-home.component.css'],
})
export class TypingChallengeHomeComponent {
  randomText: string = faker.lorem.sentence();

  onChangeTypingInput(text: string) {
    console.log(text, 'text');
  }
}
