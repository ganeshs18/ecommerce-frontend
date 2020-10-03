import { StoreDetailComponent } from './components/store/store-detail/store-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SideBarComponent } from './layouts/side-bar/side-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavBarComponent } from './layouts/nav-bar/nav-bar.component';

import { CarousalComponent } from './layouts/carousal/carousal.component';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { ResponsiveSideNavDirective } from './directives/responsive-side-nav.directive';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { NgbModule, NgbRating } from '@ng-bootstrap/ng-bootstrap';
import { CategorySidemenuComponent } from './components/category-sidemenu/category-sidemenu.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideBarComponent,
    NavBarComponent,
    CarousalComponent,
    ResponsiveSideNavDirective,
    SearchResultComponent,
    CategorySidemenuComponent,
    StoreDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    LayoutModule,
    NgbModule,
  
  ],
  providers: [ NgbRating],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
