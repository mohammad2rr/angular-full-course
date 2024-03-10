import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-home',
  templateUrl: './directives-home.component.html',
  styleUrls: ['./directives-home.component.css'],
})
export class DirectivesHomeComponent {
  currentPage: number = 0;

  setIsCurrentClass(index: number) {
    return index === this.currentPage ? 'is-current' : '';
  }

  images = [
    {
      title: 'at the jungle111',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdRIXl2wufWFoQzehBD7N3_TTfwYaEVTSvig&usqp=CAU',
    },
    {
      title: 'at the jungle222',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT79zq2eiP97ZgVZTnD64o9EsGu1Z-w6EZH1qsgNL1CjsLgnqj4PSx5KmKQZRlvFgY4wYA&usqp=CAU',
    },
    {
      title: 'at the jungle333',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXcCHWvrdHYgPrwBiQzoKfkqkZjABarjMVm0sd_iC45k9SWzvg9L3BNxN5VjwC-1ilO3E&usqp=CAU',
    },
    {
      title: 'at the jungle444',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS2CY1ZFdT0qqocCha0b3t5pjTZVaXIzFPx3rTLMpv8n2H5VXbytJETcRTu3pnXqgtzSc&usqp=CAU',
    },
  ];
}
