import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { MainService } from '../services/mainservice.service'
import { error } from 'util';

@Component({
  selector: 'app-good',
  providers: [MainService],
  templateUrl: './good.component.html',
  styleUrls: ['./good.component.css']
})
export class GoodComponent implements OnInit {

  goodItem: any;
  options:any;
  language:any;
  imageList:any;

  constructor(private service:MainService, private router:ActivatedRoute) { }

  ngOnInit() {    
      
    this.language = this.service.translate()  

    this.router.params.subscribe(
      data => 
      {
       this.service.getImages(data['goodID']).subscribe
       (
        response => 
        {
         this.imageList = JSON.parse(response.text())
         //console.log("another images:"+this.imageList)
        }
       )
       this.service.getGood(data['goodID']).subscribe
      (
       res =>
       {
        this.goodItem = JSON.parse(res.text())
        this.goodItem = this.goodItem[0]//One elent must return
       }
      )
      this.service.getGoodSizes(data['goodID']).subscribe
      (
       opt => 
       {
        this.options = JSON.parse(opt.text())          
       }
      )
     }
    )    
   }

   AddToCard(good, option)
   { 
    let optionAr = option.split(",") //getting from array item with separetor ','
    good.size   = optionAr[0] //size
    good.prize  = optionAr[1] //prize
    this.service.addToCard(good)
   }
}
