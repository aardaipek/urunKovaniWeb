import { Component, OnInit,defineInjectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AppService} from "../../../app.service"
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  sideMenu : object;
  MenuCount : number;
  categoryShow : boolean;
  url : string;

  constructor(private http: HttpClient,public appService : AppService,public route: ActivatedRoute) { 
    
  }

  categoryClose(categoryStatus){
    if(categoryStatus)
    this.categoryShow= false;
    else
    this.categoryShow = true;
  }

  async getMenus(){
    this.sideMenu = await this.appService.getSideMenu();

  }

  ngOnInit(): void {
    this.getMenus();
    this.url = this.route.routeConfig.path;

    if(!this.url)
    this.categoryShow = true;

  }

 
 
}
