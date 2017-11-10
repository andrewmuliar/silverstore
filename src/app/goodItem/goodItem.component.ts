import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-goodItem',
  templateUrl: './goodItem.component.html',
  styleUrls: ['./goodItem.component.css']
})

export class GoodItemComponent implements OnInit {

  @Input() goodInput:Object

  good:any;
  constructor() { }

  ngOnInit() {
   this.good = this.goodInput
  }

}
