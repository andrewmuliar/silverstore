import { Component, OnInit } from '@angular/core';

import { MainService } from '../services/mainservice.service';

@Component({
  selector: 'header-app',
  providers: [MainService],  
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  categoryList: any;
  constructor(private service:MainService) { }

  ngOnInit() {

   this.service.getCategories().subscribe(

    data => this.categoryList = JSON.parse(data.text())
    
   )
  }

}
