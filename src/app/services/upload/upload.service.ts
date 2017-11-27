import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class UploadService {

constructor(private _http:Http) { }

    public uploadImage(id_good,formData:any)//filename:any,
    {
     //let _url: string = "http://localhost/silver/upload.php?id_good="+id_good;
     let _url: string = "/upload.php?id_good="+id_good;
     return this._http.post(_url, formData);
    }
}