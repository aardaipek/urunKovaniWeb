import { Component, OnInit } from '@angular/core';
import { AppService } from "../../../app.service"

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent implements OnInit {
  shopMenu: object;
  shopCategories: object;
  activeMenuItem: string;

  constructor(public appService: AppService) { }



  async getShopCategories() {
    let getAllShops = await this.appService.shopCategories();
    this.shopCategories = getAllShops;

  }


  async mainMenuGet() {
    let appSettings = await this.appService.getAppSettings();
    this.shopMenu = appSettings["shop_menu"];
    this.activeMenuItem = this.shopMenu[0]["name"];

  }

  activeMenuItemClick(item) {
    this.activeMenuItem = item;
  }

  ngOnInit(): void {
    
    this.mainMenuGet();
    this.getShopCategories();

  }

}
