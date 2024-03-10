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
      title: 'at the jungle',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdRIXl2wufWFoQzehBD7N3_TTfwYaEVTSvig&usqp=CAU',
    },
    {
      title: 'at the jungle',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdRIXl2wufWFoQzehBD7N3_TTfwYaEVTSvig&usqp=CAU',
    },
    {
      title: 'at the jungle',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdRIXl2wufWFoQzehBD7N3_TTfwYaEVTSvig&usqp=CAU',
    },
    {
      title: 'at the jungle',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdRIXl2wufWFoQzehBD7N3_TTfwYaEVTSvig&usqp=CAU',
    },
  ];
}
