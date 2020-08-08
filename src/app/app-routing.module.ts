import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ShopDetailComponent } from './pages/shop/shop-detail/shop-detail.component';
<<<<<<< HEAD
=======
import { ShopCartComponent } from './pages/shop/shoping-cart/shoping-cart.component';
>>>>>>> 1048c2a3a64d2a44953fc7f8b50ad4f4eaaa1fb2



const routes: Routes = [
  { path: "", pathMatch: "full", component: HomeComponent },
  {
    path: "shop", component: ShopComponent
  },
<<<<<<< HEAD
=======
  {
    path: "shop-cart", component: ShopCartComponent
  },
>>>>>>> 1048c2a3a64d2a44953fc7f8b50ad4f4eaaa1fb2
  { path: "detail/:id", component: ShopDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
