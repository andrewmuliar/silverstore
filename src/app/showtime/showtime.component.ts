import { Component, OnInit, ElementRef } from '@angular/core';

import { MainService } from '../services/mainservice.service';
import { UploadService } from '../services/upload/upload.service';

@Component({
  selector: 'app-showtime',
  providers: [MainService, UploadService],
  templateUrl: './showtime.component.html',
  styleUrls: ['./showtime.component.css']
})

export class ShowtimeComponent implements OnInit {

  goodsList:any;
  categList:any;
  statusGood:any; 
  statusCategory:any; 
  url:Array<any> = [];
  images:any;  

  constructor(private service:MainService, 
              private elem:ElementRef, private fileUploader:UploadService) { }

  ngOnInit() {
  }


//Показує товари відповідно до початку та кількості товарі в параметрах
  ShowGoods()
  {
   this.service.getGoods(0, 1).subscribe(
     data => this.goodsList += JSON.parse(data.text())
   )
  }

 ShowCateg()
 {
  this.service.getCategories().subscribe(
    data => this.categList = JSON.parse(data.text()))
 }
 
 deletGood(good)
 {
  this.service.delGood(good).subscribe(
    data => this.statusGood = JSON.parse(data.text())
  )
 }
 deleteCategory(category)
 {
  this.service.delGood(category).subscribe(
    data => 
     this.statusCategory = JSON.parse(data.text())
  )  
 }

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

 uploadImage()
 {
  //  let files = this.elem.nativeElement.querySelector("#selectFile").files;
  //  let formData = new FormData()
  //  console.log(files)
  //  //let file = files[0]
  //  for(let i = 0; i<= files.length; i++)
  //   formData.append('selectFile'+i, files[i], 'nameOF'+i+'.jpg');
  //  this.fileUploader.uploadImage(formData)
  //      .subscribe(res => console.log(res))   
  // //  for( let i = 0; i<files.length; i++)
  // //  {
  // //   formData.append('selectFile', files, files[i].name);
  // //   this.fileUploader.uploadImage(i, formData)
  // //       .subscribe(res => console.log(res))
  // //  }
 }
}
