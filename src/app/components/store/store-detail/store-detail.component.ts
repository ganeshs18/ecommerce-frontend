import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-detail',
  templateUrl: './store-detail.component.html',
  styleUrls: ['./store-detail.component.css']
})
export class StoreDetailComponent implements OnInit {
  storeRating:number=4;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let storeId = Number(params.id);
      console.log(storeId);
      if (storeId) {
        console.log(params.id);
      }
      else {
        this.router.navigate(['/home']);
      }

    })
  }

}
