import { Injectable } from '@angular/core';
import {Product} from './product';
import {StoreProduct} from './store-product';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  constructor(private http:Http) { }

  getProductDetails(url:string, searchKey:string, store:string): Observable<Product[]>{
    const searchUrl = `${url}?searchKey=${searchKey}&store=${store}`;
    
    return this.http.get(searchUrl).map(
        (response) => {
          var products = response.json() as Product[];
          console.log("Products : " + response);
          return products;
        }
      )
        
  }

  getAllProductDetails(url:string, searchKey:string): Observable<StoreProduct[]>{
    const searchUrl = `${url}?searchKey=${searchKey}`;
    
    return this.http.get(searchUrl).map(
        (response) => {
          var storeproducts = response.json() as StoreProduct[];
          console.log("Products : " + response);
          return storeproducts;
        }
      )        
  } 

}
