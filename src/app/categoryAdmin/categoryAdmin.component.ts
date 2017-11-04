import { Component, OnInit } from '@angular/core';

import {FormGroup , FormControl } from '@angular/forms';

import { MainService } from '../services/mainservice.service';
import { UploadService } from '../services/upload/upload.service';

@Component({
  selector: 'app-categoryAdmin',
  templateUrl: './categoryAdmin.component.html',
  providers: [MainService, UploadService],      
  styleUrls: ['./categoryAdmin.component.css']
})
export class CategoryAdminComponent implements OnInit {
     
  form = new FormGroup({
    'english': new FormControl(),
    'france':new FormControl(),
    'germany':new FormControl()
  })
  langProp = "eng"; //default lang English  
  categoryList:any;
  deleteStatus = 
  {
   status:0
  }
  selectedCategory = 
  {
   "id":"",
   "english":"",
   "france" :"",
   "germany":""
  }  
  constructor( private service:MainService) { }
  
  public ngOnInit(): void 
  {
   this.form.addControl("id_category", new FormControl())
   this.form.controls['id_category'].patchValue(this.selectedCategory.id)  
   this.showCategories()   
  }
  
 //Adding new Good to interface
 AddNewCategory()
  {
    this.selectedCategory = 
    {
     "id":"",
     "english":"",
     "france" :"",
     "germany":""
    } 
    this.form.patchValue({'id': this.selectedCategory.id})
    this.form.patchValue({'english':this.selectedCategory.english})
    this.form.patchValue({'france' :this.selectedCategory.france})
    this.form.patchValue({'germany':this.selectedCategory.germany})    
  }

 DeleteCategory(category)
 {
  this.service.delCateg(category.id).subscribe(
    data => {
      this.deleteStatus = JSON.parse(data.text())
      this.form.patchValue({'id':''})
      this.form.patchValue({'english':''})
      this.form.patchValue({'france' :''})
      this.form.patchValue({'germany':''})  
      this.showCategories()  
    }
  )
 }
  
  InsertCategory()
  {
   console.log(this.form.value)
   this.service.createCategory(this.form.value).subscribe(
    data => {alert("inserted"); this.showCategories() }
   )
  }

  selectCategory(category)
  {
   this.selectedCategory = category
   this.form.patchValue({'english':this.selectedCategory.english})
   this.form.patchValue({'france' :this.selectedCategory.france})
   this.form.patchValue({'germany':this.selectedCategory.germany})
  }
  
  showCategories()
  {
   this.service.getCategories()
    .subscribe( data => 
      {
        this.categoryList = JSON.parse(data.text())
      })
  }

  setLangProp(leng)
  {
   this.langProp = leng
  }
}
