import { Component, OnInit, Input } from '@angular/core';
import {ProductService} from '../product.service';
import {Product} from '../product';
import {StoreProduct} from '../store-product';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 
  storeProductList : StoreProduct[];
  
  constructor(private productService : ProductService) { }

  ngOnInit() {
  }

  searchPrices(searchValue:string) : void{
    const url = `http://localhost:8080`;
    this.productService.getAllProductDetails(url, searchValue).subscribe(
       results => {this.storeProductList = results}
    );
  }

}
