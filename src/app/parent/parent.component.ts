import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  selectedId = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onChange(event) {
    console.log(event.target.value);
    this.selectedId = event.target.value;
  }
}
