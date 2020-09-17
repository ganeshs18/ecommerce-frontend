import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  searchKey: string;
  constructor(private route: ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params)=>{
      console.log(params);
      if(!params.key){
        this.router.navigate(['/home'])
      }
      else{
        this.searchKey=params.key;
      }
     
    })
    
}


}
