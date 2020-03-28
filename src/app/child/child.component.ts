import { Component, OnInit, SimpleChanges, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {

  // tslint:disable-next-line:indent
  dummyData = [
    {
      id: '0001',
      type: 'donut',
      name: 'Cake',
      ppu: 0.55,
      batters:
      {
        batter:
          [
            { id: '1001', type: 'Regular' },
            { id: '1002', type: 'Chocolate' },
            { id: '1003', type: 'Blueberry' },
            { id: '1004', type: 'Devil\'s Food' }
          ]
      },
      topping:
        [
          { id: '5001', type: 'None' },
          { id: '5002', type: 'Glazed' },
          { id: '5005', type: 'Sugar' },
          { id: '5007', type: 'Powdered Sugar' },
          { id: '5006', type: 'Chocolate with Sprinkles' },
          { id: '5003', type: 'Chocolate' },
          { id: '5004', type: 'Maple' }
        ]
    },
    {
      id: '0002',
      type: 'Mango',
      name: 'Raised',
      ppu: 0.55,
      batters:
      {
        batter:
          [
            { id: '1001', type: 'Regular' }
          ]
      },
      topping:
        [
          { id: '5001', type: 'None' },
          { id: '5002', type: 'Glazed' },
          { id: '5005', type: 'Sugar' },
          { id: '5003', type: 'Chocolate' },
          { id: '5004', type: 'Maple' }
        ]
    },
    {
      id: '0003',
      type: 'Apple',
      name: 'Old Fashioned',
      ppu: 0.55,
      batters:
      {
        batter:
          [
            { id: '1001', type: 'Regular' },
            { id: '1002', type: 'Chocolate' }
          ]
      },
      topping:
        [
          { id: '5001', type: 'None' },
          { id: '5002', type: 'Glazed' },
          { id: '5003', type: 'Chocolate' },
          { id: '5004', type: 'Maple' }
        ]
    }
  ];

  // tslint:disable-next-line:no-input-rename
  @Input('selectedId') selectedId;
  seletedData;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.selectedId) {
     console.log( 'Received input from parent component ->', this.selectedId);
     this.seletedData =  this.dummyData.find(data =>  data.id === this.selectedId);
    }
  }

}
