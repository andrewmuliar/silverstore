import { Component, OnInit , OnDestroy } from '@angular/core';

import { MainService } from '../services/mainservice.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  providers: [MainService],
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  showWurma:boolean = false;
  language:any;
  showLang:boolean;
  dictionary: any = 
  {
   eng:
   {
    home:'Home',
    shop:'Shop',
    about:'About',
    notice:'CGV and Legal Mentions',
    rings:'Rings',
    suspension:'Suspension',
    bracelet:'Bracelet',
    boucles:'Boucles',
    chains:'Chains',
    sample:'925 silver sample',
    printer:'use of technoloiges 3d printer',
    cycle:'full production cycle',
    contact:'Contact us',
    go:'Go to shop',
    uniq:"Being unique, it's us",
    text:`What to do in this world where standardization is the new reality?
    When the freedom to be oneself is equalized to non-conformism?
    When the mere act of showing one's individualism makes us rebels.
    
    If we can not change the world, it does not matter. The essential, it is that the world does not change us.
    We will follow our path, our convictions, our ideas.
    
    
    And of course, a quality worthy of free people, the use of best techniques available and personalized service guaranteed.
    
      Our biggest pride is to see the fruits our works do part of your identity. When you look at our models, be sure
    that it is something more than money or gold. It's a philosophy, a way of life and we will be infinitely happy to
    to see you become part of our family.
    
    Join us and we will always be there to make you happier!`
   },
   france:
   {
    home:'maison',
    shop:'Boutique',
    about:'A propos de nous',
    notice:'CGV et Mentions Legales', 
    rings:'Bagues',
    suspension:'Pendentifs',
    bracelet:'Bracelets',
    boucles:"Boucles d'oreilles",
    chains:'Chaînes',
    sample:'Argent 925',
    printer:'Utilisation des technologies 3D',
    cycle:'Propre cycle de production complet',
    contact:'Contactez nous',
    go:'Aller à la boutique',
    uniq:"Être unique, c'est nous",
    text:`Que faire dans ce monde ou l'uniformisation est la nouvelle réalité?
    Quand la liberté d'être soi-même est égalisée au non-conformisme?
    Quand le simple fait de montrer son individualisme, fait de nous des rebelles.
    
     Si nous ne pouvons pas changer le monde, peu importe. L'essentiel,
     c'est que le monde ne nous change pas.
     Nous allons suivre notre voie, nos convictions, nos idées.
    Chaussures cirées, costume chic, cravate bien serrée, un beau sourire
    plein de confiance et un énorme crâne mort sur le doigt pour bien
    montrer notre appartenance à ceux qui ne se font pas avoir. C'est
    nous, Rebel Club Jewelry.
    
     Et bien sûr, une qualité digne des gens libres, l'utilisation des
    meilleurs techniques disponibles, un service personnalisé garanti.
    
     Notre plus grande fierté est de voir les fruits nos travaux faire
    partie de votre identité. Quand vous regardez nos modèles, soyez sûr
    que c'est quelque chose de plus que de l'argent ou de or. C'est une
    philosophie, une façon de vivre et nous serons infiniment heureux de
     vous voir faire partie de notre famille.
    
    Rejoignez-nous et nous serons toujours là pour vous rendre plus heureux!`   
   }
  }
  showSub:boolean;
  constructor(private service:MainService) { }

  ngOnInit() {
    this.showWurma = true
    this.language = this.service.translate()
  }
  OnDestroy()
  {
   this.showWurma = false
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
  showSubmenu()
  {
   if (this.showSub == undefined) this.showSub = false
   else
    this.showSub = !this.showSub
  }
}
