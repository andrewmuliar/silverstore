import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MainService } from '../services/mainservice.service';

@Component({
  selector: 'app-categories',
  providers: [MainService],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  goodList: any

  constructor(private service:MainService, private router:ActivatedRoute) { }

  ngOnInit() {
  
   this.router.params.subscribe(
     data => 
     {
      this.service.goodsByCategory(data['category']).subscribe(
        data => {
          this.goodList = JSON.parse(data.text())
        }
      )
     }
   )
  }

}
