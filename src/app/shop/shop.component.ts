import { Component, OnInit } from '@angular/core';

import {FormGroup , FormControl } from '@angular/forms';

import { MainService} from '../services/mainservice.service';

declare let paypal: any;

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

  shopList: Array<any> = []
  resultSuma:any
  procent:any
  showPay :boolean
  resultEnd:any
  fullData: Object = {}  

  constructor(private service:MainService) { }
  
  public ngOnInit(): void {
    let storage: any = JSON.parse(localStorage.getItem('goods'))               
    for(let i = 0; i < Object.keys(storage).length; i++)
    {
     this.shopList.push(storage[i])
     this.resultSuma =+ storage[i].prize
     this.resultEnd = this.resultSuma
    }
    this.form.controls['prize'].patchValue(this.resultEnd) 
    localStorage.setItem('resultEnd',this.resultEnd) 
    console.log(JSON.parse(localStorage.getItem('resultEnd'))) 
    this.fullData = {'user_data': this.form.value,
                'goods': JSON.parse(localStorage.getItem('goods'))
               }    
   paypal.Button.render({
     env: 'sandbox', // sandbox | production     
// PayPal Client IDs - replace with your own
// Create a PayPal app: https://developer.paypal.com/developer/applications/create
     client: {
// sandbox:'Ab7GeddW8UczlTdTcQQs40bivwnkIJc2LzsztPm9ts5rXaxh_um1OFcduDNBsz0WKSsrxkfoU8rlggf4',
              sandbox: 'AbzpLxjS-ysou0JTQeJqhUaICk1kSwGSfDFos-GJeAVhOJwoXbthvFDGFyhPtVZDqxR4K_b8vqQedams',
              production: '<insert production client id>'
             },
                      // Show the buyer a 'Pay Now' button in the checkout flow
     commit: true,
                      // payment() is called when the button is clicked
    payment: function(data, actions) 
    {
    // money = Number(this.resultEnd)
     let money = Number(JSON.parse(localStorage.getItem('resultEnd')))
     console.log(money)
// Make a call to the REST api to create the payment
     return actions.payment.create({
            payment: {
                      transactions: [
                                      {
                                          amount: { total: money, currency: 'USD' }
                                      }
                                  ]
                              }
                          });
                      },
                      // onAuthorize() is called when the buyer approves the payment
                      onAuthorize: function(data, actions) {
                          // Make a call to the REST api to execute the payment
                         /* return actions.payment.execute().then(function() {
                           this.service.SumbitPay(this.dataToCommit).subscribe
                            (
                              data => console.log(data.text())
                            )
                          });*/
                      }
          
                  }, '#paypal-button');
}                                    

 checkPromo(promo)
 {
  this.service.checkPromo(promo).subscribe(
    data =>
    {
     this.procent = JSON.parse(data.text())
     this.procent = this.procent[0].procent
     this.resultEnd = this.resultSuma - this.resultSuma*this.procent/100
     this.form.controls['prize'].patchValue(this.resultEnd)
     this.fullData = {'user_data': this.form.value,
     'goods': JSON.parse(localStorage.getItem('goods'))
     }   
     localStorage.setItem('resultEnd',this.resultEnd)      
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
}