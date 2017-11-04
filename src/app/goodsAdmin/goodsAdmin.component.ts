import { Component, OnInit, ElementRef } from '@angular/core';

import {FormGroup , FormControl } from '@angular/forms';

import { MainService } from '../services/mainservice.service';
import { UploadService } from '../services/upload/upload.service';

@Component({
  selector: 'app-goodsAdmin',
  templateUrl: './goodsAdmin.component.html',
  providers: [MainService, UploadService],    
  styleUrls: ['./goodsAdmin.component.css']
})
export class GoodsAdminComponent implements OnInit {
     
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
  url :Array<any> = []
  constructor( private elem:ElementRef, 
               private service:MainService,
               private fileUploader:UploadService) { }
  
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
  }
  
 //Adding new Good to interface
  AddNewGood()
  {
    this.selectedGood = 
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
  
    this.goodSizes = []        
    this.form.patchValue({'english':this.selectedGood.english})
    this.form.patchValue({'france' :this.selectedGood.france})
    this.form.patchValue({'germany':this.selectedGood.germany})
    this.form.patchValue({'desc_eng':this.selectedGood.desc_english})
    this.form.patchValue({'desc_fra':this.selectedGood.desc_france})
    this.form.patchValue({'desc_ger':this.selectedGood.desc_germany})
    this.form.patchValue({'weight':this.selectedGood.weight})   
    this.form.patchValue({'size_count':this.goodSizes.length})
    this.showCategories()   
  }
  
  InsertGood()
  {
   let files = this.elem.nativeElement.querySelector("#selectFile").files;
   let formData = new FormData()
   for(let i = 0; i < files.length; i++)
   {
    formData.append('selectFile'+i, files[i], files[i]);
   }
   this.service.createGood(this.form.value).subscribe(
     data => 
     {
      //Uploading file to server with good_id
      this.fileUploader.uploadImage(data.text(), formData)
      .subscribe(res => 
      {
        //update goods list in menu
        this.service.getGoods(0,0)
        .subscribe(
         data => this.goodList = JSON.parse(data.text())
        )
      })   
     }
   )
  }

DeleteGood(good)
{
 this.service.delGood(good.id).subscribe(
   data => {   
     if (JSON.parse(data.text()).status == '1') //return 1 if deleted
      {
        this.selectedGood = 
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
        this.goodSizes = []        
        this.form.patchValue({'english':this.selectedGood.english})
        this.form.patchValue({'france' :this.selectedGood.france})
        this.form.patchValue({'germany':this.selectedGood.germany})
        this.form.patchValue({'desc_eng':this.selectedGood.desc_english})
        this.form.patchValue({'desc_fra':this.selectedGood.desc_france})
        this.form.patchValue({'desc_ger':this.selectedGood.desc_germany})
        this.form.patchValue({'weight':this.selectedGood.weight})   
        this.form.patchValue({'size_count':this.goodSizes.length})
        this.service.getGoods(0,0)
        .subscribe(
         data => this.goodList = JSON.parse(data.text())
        )
      }
   }
 )
}

  //ImagePreview for good on change
  readUrl(event) {
   for (let j = 0; j <= event.target.files.length; j++)
   {
     var file = event.target.files[j]
     var reader = new FileReader();
     reader.onload = (event:any) => {
       this.url.push(event.target.result);
       console.log(this.url)
     }
     reader.readAsDataURL(file);
   }
 }

 //Selecting good
  selectGood(good)
  {
   for(let i = 0; i<this.goodSizes.length; i++)
   {
    this.form.removeControl('size_field'+i)
    this.form.removeControl('prize_field'+i)
   }
   this.goodSizes = []
   this.selectedGood = good

//Patching data to inputs
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

//Adding inputs for sizes and prize
  addSize()
  {
   this.goodSizes.push({"size":'', "prize":''})
   this.form.addControl("size_field"+String(this.goodSizes.length), new FormControl())
   this.form.addControl("prize_field"+String(this.goodSizes.length), new FormControl())   

   this.form.controls['size_field'+String(this.goodSizes.length)].patchValue('')
   this.form.controls['prize_field'+String(this.goodSizes.length)].patchValue('')
   
   this.form.patchValue({'size_count':this.goodSizes.length})
  }
 
//Show Categories in dropdown list
  showCategories()
  {
   this.service.getCategories()
    .subscribe( data => 
      {
        this.catForGoods = JSON.parse(data.text())
        this.form.patchValue({'category':this.selectedGood['category']})        
      })
  }

//Removing inputs size and prize
  removeSize(size)
  {
   const index: number = this.goodSizes.indexOf(size);
   if (index !== -1) 
   {
    this.goodSizes.splice(index, 1);
   }       
   this.form.patchValue({'size_count':this.goodSizes.length})   
  }

//Change language
  setLangProp(leng)
  {
   this.langProp = leng
  }
}
