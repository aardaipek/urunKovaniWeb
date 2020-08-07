import { Injectable, NgZone } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AppService {
 public url : string;

  constructor(
    public ngZone: NgZone,
    public http : HttpClient,
    public route : Router
  ) {  
    this.url = 'https://localhost:44388';
  }


  // async getSideMenu(){
  //   const response = await this.http.get(this.url + '/api/app/side_menu/3').toPromise();
  //   const sideMenu = response; 
  //   return sideMenu;
  // }

  // async getMainMenu(){
  //   const response = await this.http.get(this.url + '/api/app/main_menu/6').toPromise();
  //   const mainMenu = response; 
  //   return mainMenu;
  // }

  async getAppSettings(){
    const response = await this.http.get(this.url + '/api/app/app_settings/1').toPromise();
    const appSettings = JSON.parse(response[0]["content"]);
   
    return appSettings;
  }
  
}
