import { Component, OnInit, Input } from '@angular/core';
import {ProductService} from '../product.service';
import {Product} from '../product';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
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
