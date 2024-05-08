import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-palce-holder',
  templateUrl: './place-holder.component.html',
  styleUrls: ['./place-holder.component.css'],
})
export class PalceHolderComponent implements OnInit {
  @Input() lines = 4;
  @Input() header = true;

  constructor() {}

  ngOnInit(): void {}
}
