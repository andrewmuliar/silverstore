import { Component, OnInit } from '@angular/core';

import {FormGroup , FormControl } from '@angular/forms';

import { MainService} from '../services/mainservice.service';

@Component({
  selector: 'app-shop',
  providers: [MainService],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  form = new FormGroup({
    'name': new FormControl(),
    'surname':new FormControl(),
    'phone':new FormControl(),
    'email':new FormControl(),
    'country':new FormControl(),
    'city':new FormControl(),   
    'street':new FormControl(),   
    'zip':new FormControl(),
    'promo_code':new FormControl(),
    'notes': new FormControl(),
    'prize': new FormControl()
  })

  commitData: Object
  shopList: Array<any> = []
  resultSuma:any
  procent:any
  showPay :boolean
  resultEnd:any

  constructor(private service:MainService) { }

  ngOnInit() {

    let storage: any = JSON.parse(localStorage.getItem('goods'))
    
    for(let i = 0; i < Object.keys(storage).length; i++)
      {
       this.shopList.push(storage[i])
       this.resultSuma =+ storage[i].prize
       this.resultEnd = this.resultSuma
      }
      console.log(this.shopList)
      
  }

  checkPromo(promo)
 {
  this.service.checkPromo(promo).subscribe(
    data =>
    {
     this.procent = JSON.parse(data.text())
     console.log(this.procent)
     this.procent = this.procent[0].procent
     this.resultEnd = this.resultSuma - this.resultSuma*this.procent/100
    }
  )
 } 
  //Remove Good from localstorage
  removeGood(good)
  {
   const index: number = this.shopList.indexOf(good);
   if (index !== -1) 
   {
    this.shopList.splice(index, 1);
    this.service.removeFromCard(good)
   }
  }
  clicker()
  {
   let storage: Object = {}
   this.form.controls['prize'].patchValue(this.resultEnd)   
   storage = {'user_data': this.form.value,
              'goods': JSON.parse(localStorage.getItem('goods'))}
   this.commitData = storage
   this.service.SumbitPay(storage).subscribe
   (
     data => console.log(data.text())
   )
   this.showPay = true
  }

}
