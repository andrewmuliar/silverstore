import { Component, OnInit, Input } from '@angular/core';

import { MainService } from '../services/mainservice.service';

declare let paypal: any;


@Component({
  selector: 'paypal',
  providers: [MainService],
  template: `<div id="paypal-button"></div>`,
  styleUrls: ['./paypal.component.css']
})
export class PaypalComponent implements OnInit {

  prize = Number()
  @Input() dataToCommit:Object  
  constructor(private service:MainService) {
    let ar: Array<any> = []
    this.prize = 10
    
   }

  public ngOnInit(): void {
    console.log(this.dataToCommit)    
    let money = this.prize;
    (window as any).paypal.Button.render({
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
                  payment: function(data, actions) {
      
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
                      return actions.payment.execute().then(function() {
                        this.service.SumbitPay(this.dataToCommit).subscribe
                        (
                          data => console.log(data.text())
                        )
                      });
                  }
      
              }, '#paypal-button');    
 } 
}
