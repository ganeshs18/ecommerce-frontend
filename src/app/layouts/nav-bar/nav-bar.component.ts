import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  searchCat: string = 'All';
  categoryList: string[] = ['All', 'Grocery', 'Softwares', 'Electronics'];
  constructor() { }

  ngOnInit() {

  }

  onChangeCat(val: string) {
    this.searchCat = val;
  }

}
