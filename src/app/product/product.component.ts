import { Component, OnInit,Input } from '@angular/core';
import {ProductService} from '../product.service';
import {Product} from '../product';
import { Observable }     from 'rxjs/Observable';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']  
})
export class ProductComponent implements OnInit {
  searchValue : string;
  productList : Product[];
  @Input() store:string = "";
  constructor(private productService : ProductService) { }

  ngOnInit() {
  }

  searchPrices(searchValue:string) : void{
    const url = `http://localhost:8080`;
    this.productService.getProductDetails(url, searchValue, this.store).subscribe(
       results => {this.productList = results}
    );
  }

}
