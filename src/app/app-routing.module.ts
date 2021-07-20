import { StoreDetailComponent } from './components/store/store-detail/store-detail.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { AuthGaurdService } from './services/auth-gaurd.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'search', component: SearchResultComponent },
  { path: 'home', component: HomeComponent },
  { path: 'store/:id', component: StoreDetailComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGaurdService]
})
export class AppRoutingModule { }
