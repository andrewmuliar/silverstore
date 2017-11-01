import { Component, OnInit } from '@angular/core';

import {FormGroup , FormControl } from '@angular/forms';

import { MainService } from '../services/mainservice.service';
import { UploadService } from '../services/upload/upload.service';

@Component({
  selector: 'app-admin',
  templateUrl: 'admin.component.html',
  providers: [MainService, UploadService],  
  styleUrls: ['admin.component.css']
})

export class AdminComponent implements OnInit {
  
  form = new FormGroup({
    'english': new FormControl(),
    'france':new FormControl(),
    'germany':new FormControl(),
    'desc_eng':new FormControl(),
    'desc_fra':new FormControl(),
    'desc_ger':new FormControl(),
    'category': new FormControl(),
    'weight': new FormControl()
  })
  langProp = "eng"; //default lang English  
  goodList:any;
  selectedGood = 
  {
   "id":"",
   "english":"",
   "france" :"",
   "germany":"",
   "desc_france":"",
   "desc_english":"",
   "desc_germany":"",
   "weight":"",
   "category":""
  }  
  goodSizes:Array<any> = [];
  catForGoods:any;
  constructor( private service:MainService) { }
  
  public ngOnInit(): void 
  {
   this.service.getGoods(0,0)
   .subscribe(
    data => this.goodList = JSON.parse(data.text())
   )
   this.form.addControl("id_good", new FormControl())
   this.form.controls['id_good'].patchValue(this.selectedGood.id)  
   this.form.addControl('size_count', new FormControl())
   this.form.patchValue({'size_count':this.goodSizes.length})   
   this.showCategories()   
   this.goodSizes = []     
  }
  
 //Adding new Good to interface
  AddNewGood()
  {
    this.showCategories()   
    this.goodSizes = []    
  }
  
  InsertGood()
  {
   console.log(this.form.value)
   this.service.createGood(this.form.value).subscribe(
    data => console.log(data.text())
   )
  }
   UpdateGood()
  { 
  //  this.service.updateGood(this.form.value).subscribe(
  //  data => console.log(data.text())
  //  )
  }

  selectGood(good)
  {
   for(let i = 0; i<this.goodSizes.length; i++)
   {
    this.form.removeControl('size_field'+i)
    this.form.removeControl('prize_field'+i)
   }
   this.goodSizes = []
   this.selectedGood = good
   this.form.patchValue({'english':this.selectedGood.english})
   this.form.patchValue({'france' :this.selectedGood.france})
   this.form.patchValue({'germany':this.selectedGood.germany})
   this.form.patchValue({'desc_eng':this.selectedGood.desc_english})
   this.form.patchValue({'desc_fra':this.selectedGood.desc_france})
   this.form.patchValue({'desc_ger':this.selectedGood.desc_germany})
   this.form.patchValue({'weight':this.selectedGood.weight})   
   this.form.patchValue({'size_count':this.goodSizes.length})
   this.service.getGoodSizes(good.id)
    .subscribe(
     data =>
     {
      this.goodSizes = JSON.parse(data.text())
      for(let i = 0; i < this.goodSizes.length; i++)
      {
       this.form.addControl("size_field"+i, new FormControl())
       this.form.controls['size_field'+i].patchValue(this.goodSizes[i]['size'])
       this.form.addControl("prize_field"+i, new FormControl())
       this.form.controls['prize_field'+i].patchValue(this.goodSizes[i]['prize'])       
      }
     }
    )
   this.showCategories()    
  }

  addSize()
  {
   this.goodSizes.push({"size":'', "prize":''})
   this.form.addControl("size_field"+String(this.goodSizes.length), new FormControl())
   this.form.addControl("prize_field"+String(this.goodSizes.length), new FormControl())   

   this.form.controls['size_field'+String(this.goodSizes.length)].patchValue(this.goodSizes.length)
   this.form.controls['prize_field'+String(this.goodSizes.length)].patchValue(this.goodSizes.length)
   
   this.form.patchValue({'size_count':this.goodSizes.length})
  }
  
  showCategories()
  {
   this.service.getCategories()
    .subscribe( data => 
      {
        this.catForGoods = JSON.parse(data.text())
        this.form.patchValue({'category':this.selectedGood['category']})        
      })
  }
  removeSize(size)
  {
   const index: number = this.goodSizes.indexOf(size);
   if (index !== -1) 
   {
    this.goodSizes.splice(index, 1);
   }       
  }

  setLangProp(leng)
  {
   this.langProp = leng
  }
}