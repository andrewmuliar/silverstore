import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import { FooterComponent } from './footer/footer.component';

import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  adminStatus:boolean;
  constructor(private loc: Location, private router:Router, private activatedRoute: ActivatedRoute)
  {}

  ngOnInit()
  {
   if(this.loc.path().slice(1,6) == 'admin') this.adminStatus = true
   else this.adminStatus = false
  }
}
