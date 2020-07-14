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


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    HeroComponent,
    CategoriesComponent,
    FeaturedProductsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
