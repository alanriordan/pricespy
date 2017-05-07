import { Component, OnInit,Input, OnChanges, SimpleChange } from '@angular/core';
import {ProductService} from '../product.service';
import {Product} from '../product';
import {StoreProduct} from '../store-product';
import { Observable }     from 'rxjs/Observable';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']  
})
export class ProductComponent implements OnInit, OnChanges {  
  @Input() storeProductList : StoreProduct[] = [];
  @Input() store:string = "";
  
  constructor(private productService : ProductService) { }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    let log: string[] = [];
    for (let propName in changes) {
      let changedProp = changes[propName];
      if (propName == 'storeProductList' && changedProp.currentValue){
        this.storeProductList =  changedProp.currentValue.storeProductList as StoreProduct[];  
      }
          
    }    
  }

  ngOnInit() {
  }

  

}
