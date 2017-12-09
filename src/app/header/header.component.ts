import { Component, OnInit } from '@angular/core';

import { MainService } from '../services/mainservice.service';

@Component({
  selector: 'header-app',
  providers: [MainService],  
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  categoryList: any;
  language = 'eng'
  showLang:boolean = false;
  dictionary: any = 
  {
   eng:
   {
    home:'Home',
    shop:'Shop',
    about:'About',
    notice:'CGV and Legal Mentions',
    category:'Categories',
    search:'Search'
   },
   france:
   {
    home:'maison',
    shop:'Boutique',
    about:'A propos de nous',
    notice:'CGV et Mentions Legales', 
    category:'catégorie',   
    search:'Rechercher'    
   }
  }
  constructor(private service:MainService) { }

  ngOnInit() {
  
   this.language = this.service.translate()
   this.service.getCategories().subscribe(

    data => this.categoryList = JSON.parse(data.text())
    
   )
  }

  setLang(language)
  {
   this.service.setLanguage(language)
   this.language = this.service.translate()
  }
  showLangList()
  {
   this.showLang = !this.showLang
  }

}
