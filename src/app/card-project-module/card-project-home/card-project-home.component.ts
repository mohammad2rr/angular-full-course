import { Component } from '@angular/core';

@Component({
  selector: 'app-card-project-home',
  templateUrl: './card-project-home.component.html',
  styleUrls: ['./card-project-home.component.css'],
})
export class CardProjectHomeComponent {
  customCardData = [
    {
      title: 'item1',
      imageUrl: 'https://bulma.io/images/placeholders/96x96.png',
      userName: 'user1',
      content: 'user1-content',
    },
    {
      title: 'item2',
      imageUrl: 'https://bulma.io/images/placeholders/96x96.png',
      userName: 'user2',
      content: 'user2-content',
    },
    {
      title: 'item3',
      imageUrl: 'https://bulma.io/images/placeholders/96x96.png',
      userName: 'user3',
      content: 'user3-content',
    },
  ];
}
