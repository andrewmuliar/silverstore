import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class UploadService {

constructor(private _http:Http) { }

    public uploadImage(formData:any)
    {
     let _url: string = "http://localhost/silver/upload.php";
     return this._http.post(_url, formData);
    }

    private 

}