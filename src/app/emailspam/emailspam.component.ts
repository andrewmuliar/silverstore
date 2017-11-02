import { Component, OnInit } from '@angular/core';

import {FormGroup , FormControl } from '@angular/forms';

import { MainService } from '../services/mainservice.service';

@Component({
  selector: 'app-emailspam',
  templateUrl: './emailspam.component.html',
  providers: [MainService],        
  styleUrls: ['./emailspam.component.css']
})
export class EmailspamComponent implements OnInit {

  form = new FormGroup({
    'text_for_email': new FormControl(),
    'subject': new FormControl()
  })
  constructor(private email:MainService) { }

  ngOnInit() {
  }
  
  sendEmail()
  {
   this.email.sendEmail(this.form.value).subscribe(
      data => console.log(data.text())
     )   
  }

}
