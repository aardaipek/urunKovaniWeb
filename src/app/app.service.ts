import { Injectable, NgZone } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient,HttpParams } from '@angular/common/http';

import { ToastService } from './services/toast.service';

@Injectable({
  providedIn: 'root'
})

export class AppService {
  public url: string;
  basketCount: number;
  likeCount: number;

  constructor(
    public ngZone: NgZone,
    public http: HttpClient,
    public route: Router,
    private toast: ToastService
  ) {
    this.url = 'https://localhost:44388';
    this.basketCount = 0;
    this.likeCount = 0;

  }

  getCulture() {
    var language;
    if (window.navigator.language) {
      language = window.navigator.language
    } 
    return language
  }

  async shopCategories() {
    const response = await this.http.get(this.url + '/api/app/shop_categories').toPromise();
   
    return response;
  }

  async getTopStoresShops() {
    const response = await this.http.get(this.url + '/api/app/top_stores_shops').toPromise();
   
    return response;
  }

  async SystemCategories() {
    const response = await this.http.get(this.url + '/api/app/system_categories').toPromise();
   
    return response;
  }
  
  async getShopInfo(id) {
    const response = await this.http.get(this.url + '/api/app/get_shop/'+ id).toPromise();
   
    return response;
  }

  async getShopsProducts(id) {
    const response = await this.http.get(this.url + '/api/app/get_shops_products/'+ id).toPromise();

    return response;
  }
  async ShopsAndSystemCategories() {
    const response = await this.http.get(this.url + '/api/app/shop_and_system_categories').toPromise();
   
    return response;
  }

  async sortShopsProducts(id,sortId) {
    let params = new HttpParams();
    params = params.append('id', id);
    params = params.append('sortId', sortId);
    const response = await this.http.get(this.url + '/api/app/sort_shops_products',{params:params}).toPromise();
   
    return response;
  }

  async getAppSettings() {
    const response = await this.http.get(this.url + '/api/app/app_settings/1').toPromise();
    const appSettings = JSON.parse(response[0]["content"]);
    let culture: string =  this.getCulture();
    appSettings["culture"] = culture != null ? culture : "tr";

    return appSettings;
  }

  addBasket() {
    this.basketCount++;
    this.toast.succesProcess("Ürün sepetinize eklendi.")
  }

  addLike() {
    this.likeCount++;
    this.toast.succesProcess("Ürün beğeni listenize eklendi.")
  }

}
