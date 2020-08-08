import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/home/menu/menu.component';
import { HeaderComponent } from './components/home/header/header.component';
import { HeroComponent } from './components/home/hero/hero.component';
import { CategoriesComponent } from './components/home/categories/categories.component';
import { FeaturedProductsComponent } from './components/home/featured-products/featured-products.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { ShopComponent } from './pages/shop/shop.component';
import { HomeComponent } from './pages/home/home.component';
import { BreadcrumbHeroComponent } from './components/shop/breadcrumb-hero/breadcrumb-hero.component';
import { ShopDetailComponent } from './pages/shop/shop-detail/shop-detail.component';
<<<<<<< HEAD

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material 
// TODO: İlerisi için angular material modulleri ayrı bir service veya classtan çekilebilir.
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
=======
import { ShopCartComponent } from './pages/shop/shoping-cart/shoping-cart.component';


import { HttpClientModule } from '@angular/common/http';
>>>>>>> 1048c2a3a64d2a44953fc7f8b50ad4f4eaaa1fb2



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    HeroComponent,
    CategoriesComponent,
    FeaturedProductsComponent,
    FooterComponent,
    ShopComponent,
    HomeComponent,
    BreadcrumbHeroComponent,
<<<<<<< HEAD
    ShopDetailComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
=======
    ShopDetailComponent,
    ShopCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
>>>>>>> 1048c2a3a64d2a44953fc7f8b50ad4f4eaaa1fb2
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
