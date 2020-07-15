import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ShopDetailComponent } from './pages/shop/shop-detail/shop-detail.component';



const routes: Routes = [
  { path: "", pathMatch: "full", component: HomeComponent },
  {
    path: "shop", component: ShopComponent
  },
  { path: "detail/:id", component: ShopDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
