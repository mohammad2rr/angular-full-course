import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

interface Idata {
  name: string;
  age: number;
  job: string;
  employed: boolean;
}

interface IHeaders {
  key: string;
  value: string;
  show: boolean;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit, OnChanges {
  @Input() data: Idata | undefined;
  @Input() headers: IHeaders[] = [];
  @Input() name: string = '';
  @Input() className = 'basic';

  constructor() {
    //console.log(this.data);
  }
  ngAfterContentChecked() {
    //console.log(this.data);
  }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log('ngOnChanges');
    // console.log(changes);
    // console.log(this.data);
  }
  ngOnInit(): void {
    //console.log('ngOnInit');
    //console.log(this.data);
  }
  ngOnDestroy(): void {
    // console.log('ngOnDestroy');
  }
  ngDoCheck(): void {
    // console.log('ngOnDoChecked');
  }
}
