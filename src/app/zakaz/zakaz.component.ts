import { Component, OnInit } from '@angular/core';

import { MainService } from '../services/mainservice.service';

@Component({
  selector: 'app-zakaz',
  templateUrl: './zakaz.component.html',
  styleUrls: ['./zakaz.component.css'],
  providers: [MainService]
})
export class ZakazComponent implements OnInit {

  zakazList: any;

  constructor(private service:MainService) { }

  ngOnInit() {
   this.service.getZakaz(0,0).subscribe
   (
    data => console.log(JSON.parse(data.text()))
   )
  }

}
