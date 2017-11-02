import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class UploadService {

constructor(private _http:Http) { }

    public uploadImage(filename:any,formData:any)
    {
     let _url: string = "http://www.shkola22.com.ua/test/upload.php?fileName="+filename;
     return this._http.post(_url, formData);
    }
}