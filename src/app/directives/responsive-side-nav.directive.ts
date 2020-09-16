import { ProductsService } from './../services/products.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Directive, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { map } from 'rxjs/operators';


@Directive({
  selector: '[permanentAt]'
})
export class ResponsiveSideNavDirective implements OnInit {

  constructor(private breakpoint: BreakpointObserver,
    private sidenav: MatSidenav, private productService: ProductsService) { }
  @Input() permanentAt: number;


  ngOnInit() {
    const permanent$ = this.breakpoint
      .observe(`(min-width: ${this.permanentAt}px)`)
      .pipe(
        // takeUntil(this.destroy$),
        map(({ matches }) => matches)
      );

    permanent$.subscribe(permanent => {
      this.sidenav.mode = permanent ? "side" : "over";
      this.sidenav.opened = permanent;
      this.productService.isSideNavOpened.next(permanent);
    });
  }

}
