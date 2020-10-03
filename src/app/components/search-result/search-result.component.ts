import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  searchKey: string;
  type: string;
  currentRate: number = 3.5;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      console.log(params);
      if (!params.k) {
        this.router.navigate(['/home'])
      }
      else {
        this.searchKey = params.k;
        if (!params.t) {
          this.type = 'All'
        }
        else {
          this.type = params.t;
        }

      }

    })

  }


  onNavStore(id: number) {
    let storePath = '/store/' + id;
    this.router.navigate([storePath]);
  }


}
