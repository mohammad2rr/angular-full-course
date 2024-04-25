import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-home',
  templateUrl: './directives-home.component.html',
  styleUrls: ['./directives-home.component.css'],
})
export class DirectivesHomeComponent {
  currentPage: number = 0;
  isExist: boolean = true;
  hasCustomClass: boolean = false;

  hasCustomClassToggler() {
    this.hasCustomClass = !this.hasCustomClass;
  }
  setIsCurrentClass(index: number) {
    return index === this.currentPage ? 'is-current' : '';
  }
  ifEkseToggle() {
    this.isExist = !this.isExist;
  }

  checkWindowIndex(index: number): boolean {
    // console.log(this.currentPage, 'this.currentPage');
    // console.log(index, 'index');

    return Math.abs(this.currentPage - index) < 2;
  }
  images = [
    {
      title: 'at the jungle111',
      url: 'https://disneyartonmain.com/cdn/shop/products/junboo_vg_01_19064f97-534c-4786-b6de-45cdbf5a8239.jpg?v=1691022442',
    },
    {
      title: 'at the jungle111',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1hZqPjQWk8YAk0Y7dWpXQZNKtOsdc_5afGVcYAzk-imnXEzkTsUjSuhwAx2QXrJby67E&usqp=CAU',
    },

    {
      title: 'at the jungle111',
      url: 'https://cdn.vox-cdn.com/thumbor/RGxMphlnEmsgqln0Y3B1T0AYsrQ=/0x0:1280x717/1200x800/filters:focal(538x257:742x461)/cdn.vox-cdn.com/uploads/chorus_image/image/49321287/junglemain.0.jpg',
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
    {
      title: 'at the jungle444',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS2CY1ZFdT0qqocCha0b3t5pjTZVaXIzFPx3rTLMpv8n2H5VXbytJETcRTu3pnXqgtzSc&usqp=CAU',
    },
    {
      title: 'at the jungle444',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS2CY1ZFdT0qqocCha0b3t5pjTZVaXIzFPx3rTLMpv8n2H5VXbytJETcRTu3pnXqgtzSc&usqp=CAU',
    },
    {
      title: 'at the jungle444',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS2CY1ZFdT0qqocCha0b3t5pjTZVaXIzFPx3rTLMpv8n2H5VXbytJETcRTu3pnXqgtzSc&usqp=CAU',
    },
    {
      title: 'at the jungle444',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS2CY1ZFdT0qqocCha0b3t5pjTZVaXIzFPx3rTLMpv8n2H5VXbytJETcRTu3pnXqgtzSc&usqp=CAU',
    },
    {
      title: 'at the jungle444',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS2CY1ZFdT0qqocCha0b3t5pjTZVaXIzFPx3rTLMpv8n2H5VXbytJETcRTu3pnXqgtzSc&usqp=CAU',
    },
  ];

  switchCaseData = [1, 2, 3, 8];
}
