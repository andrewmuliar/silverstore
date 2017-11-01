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

 uploadImage()
 {
   let files = this.elem.nativeElement.querySelector("#selectFile").files;
   let formData = new FormData()
   let file = files[0]
   formData.append('selectFile', file, file.name);
   this.fileUploader.uploadImage(formData)
        .subscribe(res => console.log(res))
 }
}
