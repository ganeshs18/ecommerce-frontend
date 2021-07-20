import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public isSideNavOpened: BehaviorSubject<boolean> = new BehaviorSubject(null);
  productCategories: BehaviorSubject<any> = new BehaviorSubject(null);
  allProducts: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(private api: ApiService) { }

  getProductCategories() {
    this.api.get('https://fakestoreapi.com/products/categories').subscribe((data) => {
      console.log(data);
      this.productCategories.next(data);
    })

  }


  getProducts() {
    let url = 'https://fakestoreapi.com/products/';
    this.api.get(url).subscribe((data) => {
      this.allProducts.next(data);
    })
  }

 async getCatWiseProducts(cat:string):Promise<any>{
    return this.api.get(`https://fakestoreapi.com/products/category/${cat}`).toPromise();
  }

}
