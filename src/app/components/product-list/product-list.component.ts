import { ProductsService } from './../../services/products.service';
import { ApiService } from './../../services/api.service';
import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  cat: string;
  products: any
  allProducts: BehaviorSubject<any>;
  catWiseProducts: any;
  constructor(private route: ActivatedRoute, private productService: ProductsService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      console.log(params)
      this.cat = params['category']?.split('-').join(' ');
    });
    if (!this.cat && !this.allProducts.value) this.getAllProducts();
    else if (this.cat && !this.allProducts?.value) this.getCatwise(this.cat);
    else if (this.cat && this.allProducts?.value) this.filterProducts(this.cat);
    console.log(this.products);
  }

  getCatwise(cat: string) {
    this.productService.getCatWiseProducts(cat).then((data) => {
      this.catWiseProducts = data;
      this.products = this.catWiseProducts;

    })
  }

  filterProducts(cat: string) {
    console.log(this.allProducts)
  }

  getAllProducts() {
    this.productService.getProducts();
    this.allProducts.next(this.productService.allProducts.value);
  }

}
