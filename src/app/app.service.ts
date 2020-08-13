import { Injectable, NgZone } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
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

  async getTopStoresShops() {
    const response = await this.http.get(this.url + '/api/app/top_stores_shops').toPromise();
   
    return response;
  }

  async getAllShops() {
    const response = await this.http.get(this.url + '/api/app/all_shops').toPromise();
   
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
