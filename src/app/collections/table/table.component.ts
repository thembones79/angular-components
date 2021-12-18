import { Component, OnInit, Input } from '@angular/core';

interface IData {
  name: string;
  age: number;
  job: string;
}
[];

interface IHeaders {
  key: string;
  label: string;
}
[];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() data = [{ name: '', age: 0, job: '' }];
  @Input() headers = [{ key: '', label: '' }];

  constructor() {}

  ngOnInit(): void {}
}
