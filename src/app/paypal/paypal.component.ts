import { Component, OnInit } from '@angular/core';

declare let paypal: any;


@Component({
  selector: 'paypal',
  template: `<div id="paypal-button">Button</div>`,
  styleUrls: ['./paypal.component.css']
})
export class PaypalComponent implements OnInit {

  constructor() { }

  public ngOnInit(): void {
    (window as any).paypal.Button.render({
      env: 'sandbox', // sandbox | production
      
                  // PayPal Client IDs - replace with your own
                  // Create a PayPal app: https://developer.paypal.com/developer/applications/create
                  client: {
                      sandbox:'Ab7GeddW8UczlTdTcQQs40bivwnkIJc2LzsztPm9ts5rXaxh_um1OFcduDNBsz0WKSsrxkfoU8rlggf4',
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
                                      amount: { total: '1.00', currency: 'USD' }
                                  }
                              ]
                          }
                      });
                  },
      
                  // onAuthorize() is called when the buyer approves the payment
                  onAuthorize: function(data, actions) {
      
                      // Make a call to the REST api to execute the payment
                      return actions.payment.execute().then(function() {
                          window.alert('Payment Complete!');
                      });
                  }
      
              }, '#paypal-button');    
 } 
}
