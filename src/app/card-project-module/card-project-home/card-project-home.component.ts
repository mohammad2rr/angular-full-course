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
      imageUrl: '../../../assets/images/Gama-1.jpg',
      userName: 'user1',
      content: 'user1-content',
    },
    {
      title: 'item2',
      imageUrl: '../../../assets/images/Gama-2.jpg',
      userName: 'user2',
      content: 'user2-content',
    },
    {
      title: 'item3',
      imageUrl: '../../../assets/images/Gama-3.jpg',
      userName: 'user3',
      content: 'user3-content',
    },
  ];
}
