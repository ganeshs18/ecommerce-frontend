import { BehaviorSubject } from 'rxjs';
import { ProductsService } from './../../services/products.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  categories: BehaviorSubject<any>;
  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  @Input() isOpen: boolean;
  constructor(private products: ProductsService, private router: Router) {
    this.categories = products.productCategories;
  }

  ngOnInit(): void {
    console.log(this.categories)
    if (!this.categories.value) {
      this.products.getProductCategories();
    }

  }

  onNav(route: string) {
    route = route.split(' ').join('-');
    this.router.navigate(['products'], { queryParams: { category: route } });
  }

  onClose() {
    this.close.emit();
  }
}
