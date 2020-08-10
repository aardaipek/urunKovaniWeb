import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LikesComponent } from './components/likes/likes.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ShopDetailComponent } from './pages/shop/shop-detail/shop-detail.component';
import { ShopingCartComponent } from './pages/shop/shoping-cart/shoping-cart.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';



const routes: Routes = [
  { path: "", pathMatch: "full", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent},
  { path: "shop", component: ShopComponent},
  { path: "shoping-cart", component: ShopingCartComponent},
  { path: "detail/:id", component: ShopDetailComponent },
  { path: "likes/:id",component: LikesComponent} // id => userId olablir

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
