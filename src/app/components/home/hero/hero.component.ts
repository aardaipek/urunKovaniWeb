import { Component, OnInit,defineInjectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AppService} from "../../../app.service"


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  sideMenu : object;
  MenuCount : number;

  constructor(private http: HttpClient,public appService : AppService) { 
    
  }

  async getMenus(){
    this.sideMenu = await this.appService.getSideMenu();

  }

  ngOnInit(): void {
    this.getMenus();
  }

 
 
}
