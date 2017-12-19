import { Component, OnInit } from '@angular/core';

import { MainService } from '../services/mainservice.service';

@Component({
  selector: 'app-main',
  providers: [MainService],    
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  dictionary: any = 
  {
   eng:
   {
    arivals:'New arrivals',
    view:'View more'
   },
   france:
   {
    arivals:'maiNouveautésson',
    view:'Voir plus' 
   }
  }
  language = ''
  
  lastGoods:any

  constructor(private service:MainService) { }

  ngOnInit() {
    this.language = this.service.translate()   
    this.service.getLastGoods().subscribe(
      data => 
      {
       this.lastGoods = JSON.parse(data.text())
       console.log(data.text())
      }
    ) 
  }
}
