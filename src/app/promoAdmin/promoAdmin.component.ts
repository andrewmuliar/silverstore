import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/mainservice.service';

@Component({
  selector: 'app-promoAdmin',
  templateUrl: './promoAdmin.component.html',
  providers: [MainService],
  styleUrls: ['./promoAdmin.component.css']
})
export class PromoAdminComponent implements OnInit {

  promoList:any
  constructor(private service:MainService) { }

  ngOnInit() {
    this.getPromoList()
  }

  getPromoList()
  {
   this.service.getPromos().subscribe(
     data => this.promoList = JSON.parse(data.text())
    )
  }
  AddNewPromo()
  {
   console.log('asdasd')
  }
}
