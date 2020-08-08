<<<<<<< HEAD
import { Component, OnInit, defineInjectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from "../../../app.service"
import { ActivatedRoute } from '@angular/router';

=======
import { Component, OnInit,Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AppService} from "../../../app.service"
import {ActivatedRoute} from '@angular/router';
>>>>>>> 1048c2a3a64d2a44953fc7f8b50ad4f4eaaa1fb2


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
<<<<<<< HEAD
export class HeroComponent implements OnInit {
  sideMenu: object;
  MenuCount: number;
  categoryShow: boolean;
  url: string;
  isModalAvailable: boolean = false;

  constructor(
    private http: HttpClient,
    public appService: AppService,
    public route: ActivatedRoute
  ) {
  }

  categoryClose(categoryStatus) {
    if (categoryStatus)
      this.categoryShow = false;
    else
      this.categoryShow = true;
  }

  async getMenus() {
    this.sideMenu = await this.appService.getSideMenu();

  }

  ngOnInit(): void {
    this.getMenus();
    this.url = this.route.routeConfig.path;

    if (!this.url)
      this.categoryShow = true;
  }
 

  openModal(){
    this.isModalAvailable = true;
  }

  closeModal(){
    this.isModalAvailable = false;
=======
export class HeroComponent {
  sideMenuShow : boolean;
  sideMenu:object;
  url : string;
  likeCount : number;
  

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
    this.likeCount = 0;
    this.sideMenuGet();

    this.url = this.route.routeConfig.path;

    if(!this.url)
    this.sideMenuShow = true;

>>>>>>> 1048c2a3a64d2a44953fc7f8b50ad4f4eaaa1fb2
  }

 
 
}

