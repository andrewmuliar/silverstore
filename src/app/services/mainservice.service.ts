import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';


@Injectable()
export class MainService {

private url = 'http://localhost/silver'

constructor(private _http:Http) { }

//GETTERS
getGoods(start, counter) //Параметри початку та кількості записів
{
 let fullUrl = this.url+"/functions.php?getGoods="+start+"&count="+counter;
 return this._http.get(fullUrl);
}

getGoodSizes(idGood)
{
 let fullUrl = this.url+"/functions.php?sizeGood="+idGood;
 return this._http.get(fullUrl);
}

getCategories()
{
 let fullUrl = this.url+"/functions.php?getCategories=1";
 return this._http.get(fullUrl);
}

goodsByCategory(category)
{
 let fullUrl = this.url+"/functions.php?getGoodsByCategory="+category
 return this._http.get(fullUrl)
}

getZakaz(start, counter)
{
 let fullUrl = this.url+"/functions.php?getZakazu="+start+"&count="+counter
 return this._http.get(fullUrl)
}
//DELETERS
delGood(goodID)
{
 let fullUrl = this.url+'/functions.php?delGood='+goodID;
 return this._http.get(fullUrl)
}

delCateg(categID)
{
 let fullUrl = this.url+'/functions.php?delCategory='+categID;
 return this._http.get(fullUrl)
}
//ADDERS

//Post new Good
createGood(data)
{
 let fullUrl = this.url+'/creator_goods.php'
 console.log(data)
 let headers = new Headers();
 headers.append('Content-Type', 'application/json; charset=UTF-8'); 
 return this._http.post(fullUrl, data, {headers:headers})
}

createCategory(data)
{
 let fullUrl = this.url+'/creator_category.php'
 console.log(data)
 let headers = new Headers();
 headers.append('Content-Type', 'application/json; charset=UTF-8'); 
 return this._http.post(fullUrl, data, {headers:headers}) 
}

//UPDATERS

updateGood(data)
{
 let fullUrl = this.url+'/creator_goods.php'
 console.log(data)
 let headers = new Headers();
 headers.append('Content-Type', 'application/json; charset=UTF-8'); 
 return this._http.post(fullUrl, data, {headers:headers}) 
}

//Send email to costumers
 sendEmail(email)
 {
  let fullUrl = this.url+'/email.php'
  console.log(email)
  let headers = new Headers();
  headers.append('Content-Type', 'application/json; charset=UTF-8'); 
  return this._http.post(fullUrl, email, {headers:headers})   
 }

}