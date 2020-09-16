import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  events: string[] = [];
  opened: boolean;
  list: any[] = [];
  constructor(public productService:ProductsService) { }

  ngOnInit(): void {
  
  }



}
