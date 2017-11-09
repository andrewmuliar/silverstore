import { Component, OnInit } from '@angular/core';

import { MainService } from '../services/mainservice.service';

@Component({
  selector: 'app-main',
  providers: [MainService],    
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private service:MainService) { }

  ngOnInit() {
  }
}
