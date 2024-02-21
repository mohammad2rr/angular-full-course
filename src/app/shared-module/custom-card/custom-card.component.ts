import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.css'],
})
export class CustomCardComponent implements OnInit {
  @Input() title = '';
  @Input() imageUrl = '';
  @Input() userName = '';
  @Input() content = '';
  constructor() {}
  ngOnInit(): void {
    console.log('log in custom card');
  }
}
