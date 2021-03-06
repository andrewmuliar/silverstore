import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';


@Injectable()
export class MainService {
//private url = 'http://localhost/silver'
private url = ''
constructor(private _http:Http) { }

translate()
{
  let language = localStorage.getItem('translate')
  if(language === null)
  {
   localStorage.setItem('translate', 'eng')
   language = 'eng'
  }
  return language
}
setLanguage(language)
{
 localStorage.setItem('translate', language)
}
addToCard(good)
{
// localStorage.clear()
 let ar: any = {}
 ar = JSON.parse(localStorage.getItem('goods'))
 if(ar === null)
 {
  //alert("undefined")      
  ar = {'0':good}
  localStorage.setItem('goods', JSON.stringify(ar))
 }
 else
 {
 // alert("fined")  
  let len = Object.keys(ar).length
  //console.log("length = "+len)
  ar[len] = good
  localStorage.setItem('goods', JSON.stringify(ar))           
 }
 let a = JSON.parse(localStorage.getItem('goods'))
//console.log(a)
}

removeFromCard(good)
{
 let ar:Array<any> = []
 let index: number;
 ar = JSON.parse(localStorage.getItem('goods'))
 let size: number = Object.keys(ar).length 
 //console.log(good.id)
 if(ar != null)
 {
  for(let key in ar)
  {
   if (ar[key]['id']  == good.id)
   {
     delete ar[key] //remove object (key) from list of card
    }    
  }
  localStorage.setItem('goods', JSON.stringify(ar))
  let storage = JSON.parse(localStorage.getItem('goods'))
 }
}
//GETTERS
getGood(goodID)
{
 let fullUrl = this.url+"/functions.php?getGood="+goodID
 return this._http.get(fullUrl)
}

getGoods(start, counter) //Параметри початку та кількості записів
{
 let fullUrl = this.url+"/functions.php?getGoods="+start+"&count="+counter;
 return this._http.get(fullUrl);
}

//Повертає останні три товари в базі
getLastGoods()
{
  let fullUrl = this.url+"/functions.php?getLastGoods=1"
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

/* GetPromoList */
getPromos()
{
 let fullUrl = this.url+"/functions.php?promo_codes=1"
 return this._http.get(fullUrl)
}

getImages(good)
{
 console.log("good ="+good)
 let fullUrl = this.url+'/functions.php?goodImages='+good
 return this._http.get(fullUrl)
}


/* */
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
 //////console.log(data)
 let headers = new Headers();
 headers.append('Content-Type', 'application/json; charset=UTF-8'); 
 return this._http.post(fullUrl, data, {headers:headers})
}

createCategory(data)
{
 let fullUrl = this.url+'/creator_category.php'
 ////console.log(data)
 let headers = new Headers();
 headers.append('Content-Type', 'application/json; charset=UTF-8'); 
 return this._http.post(fullUrl, data, {headers:headers}) 
}

//UPDATERS

updateGood(data)
{
 let fullUrl = this.url+'/creator_goods.php'
 ////console.log(data)
 let headers = new Headers();
 headers.append('Content-Type', 'application/json; charset=UTF-8'); 
 return this._http.post(fullUrl, data, {headers:headers}) 
}

//Send email to costumers
 sendEmail(email)
 {
  let fullUrl = this.url+'/email.php'
  ////console.log(email)
  let headers = new Headers();
  headers.append('Content-Type', 'application/json; charset=UTF-8'); 
  return this._http.post(fullUrl, email, {headers:headers})   
 }

//Add submit full info about payed user
 SumbitPay(dataToCommit)
 {
  let fullUrl = this.url+'/submit_zakaz.php'
  let headers = new Headers();
  headers.append('Content-Type', 'application/json; charset=UTF-8'); 
  return this._http.post(fullUrl, dataToCommit, {headers:headers})     
 }

//Submit full info about WHAT user buy in another table
 addToZakaz(dataForZakaz)
 {
  let fullUrl = this.url+'/set_zakaz.php'
  let headers = new Headers();
  headers.append('Content-Type', 'application/json; charset=UTF-8'); 
  return this._http.post(fullUrl, dataForZakaz, {headers:headers})   
 }

 checkPromo(promo)
 {
  let fullUrl = this.url+'/functions.php?promo='+promo
  return this._http.get(fullUrl)  
 }
}