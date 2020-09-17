import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  searchCat: string = 'All';
  categoryList: string[] = ['All', 'Grocery', 'Softwares', 'Electronics'];
  constructor(private router: Router) { }
  @Input('searchInput') searchInput: string;
  ngOnInit() {

  }

  onChangeCat(val: string) {
    this.searchCat = val;
  }

  onSearch(form: NgForm) {
    console.log(form);
    console.log(form.value.search);
    if (form.value.search === '' || this.isEmptyOrSpaces(form.value.search)) {
      form.reset();
      return;
    }
    this.router.navigate(['/search'], { queryParams: { key: form.value.search } });
  }

  isEmptyOrSpaces(str: string): boolean {
    return str === null || str.match(/^ *$/) !== null;
  }

}
