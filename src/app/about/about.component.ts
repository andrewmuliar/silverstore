import { Component, OnInit , OnDestroy } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  showWurma:boolean = false;
  constructor() { }

  ngOnInit() {
    this.showWurma = true
  }
  OnDestroy()
  {
   this.showWurma = false
  }
}
