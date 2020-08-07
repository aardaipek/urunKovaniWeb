import { Component, OnInit,Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AppService} from "../../../app.service"
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  sideMenuShow : boolean;
  sideMenu:object;
  url : string;

  constructor(private http: HttpClient,public appService : AppService,public route: ActivatedRoute) { 
    
  }

  async sideMenuGet(){
    let appSettings = await this.appService.getAppSettings();
    this.sideMenu = appSettings["side_menu"];

  }

  sideMenuClose(sideMenuStatus){
    if(sideMenuStatus)
    this.sideMenuShow= false;
    else
    this.sideMenuShow = true;
  }

  ngOnInit(): void {
    this.sideMenuGet();

    this.url = this.route.routeConfig.path;

    if(!this.url)
    this.sideMenuShow = true;

  }

 
 
}
