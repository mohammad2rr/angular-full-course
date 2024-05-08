import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
  showModal: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  onChangeModal() {
    this.showModal = !this.showModal;
  }
  items = [
    {
      title: ' What is a dog?',
      content:
        'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.',
    },
    {
      title: 'What kinds of dogs are there?',
      content:
        'There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.',
    },
    {
      title: 'How do you acquire a dog?',
      content:
        'There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.',
    },
  ];
}
