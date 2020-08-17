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
  allShops: any;
  systemCategories: object;
  shopFilterObj: object;

  constructor(public appService: AppService) { }



  async getShopCategories() {
    let getAllShops = await this.appService.ShopsAndSystemCategories();
    this.allShops = getAllShops;

  }

  async getSystemCategories() {
    let systemCategories = await this.appService.SystemCategories();
    this.systemCategories = systemCategories;

  }


  async mainMenuGet() {
    let appSettings = await this.appService.getAppSettings();
    this.shopMenu = appSettings["shop_menu"];
    this.activeMenuItem = this.shopMenu[0]["name"];

  }

  activeMenuItemClick(item, categoryId) {
    this.activeMenuItem = item;
    const shopFilterArray = [];

    this.allShops.filter(function (shop) {
      if (shop.system_category.id == categoryId) {
        shopFilterArray.push(shop);
      }
    });

    this.shopFilterObj = shopFilterArray;

  }

  ngOnInit(): void {
    this.activeMenuItem = "Market";

    this.mainMenuGet();
    this.getShopCategories();
    this.getSystemCategories();

  }

}
