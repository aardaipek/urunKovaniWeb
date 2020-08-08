<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import {AppService} from "../../../app.service"
import { HttpClient } from '@angular/common/http';
=======
import { HttpClient } from '@angular/common/http';
import { Component, OnInit,Input} from '@angular/core';
import {AppService} from "../../../app.service"
>>>>>>> 1048c2a3a64d2a44953fc7f8b50ad4f4eaaa1fb2

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
<<<<<<< HEAD
export class HeaderComponent implements OnInit {
=======
export class HeaderComponent {
>>>>>>> 1048c2a3a64d2a44953fc7f8b50ad4f4eaaa1fb2
  mainMenu : object;

  constructor(private http: HttpClient,public appService : AppService) { 


  }
  
<<<<<<< HEAD
  async getMenus(){
    this.mainMenu = await this.appService.getMainMenu();
=======
  async mainMenuGet(){
    let appSettings = await this.appService.getAppSettings();
    this.mainMenu = appSettings["main_menu"];
>>>>>>> 1048c2a3a64d2a44953fc7f8b50ad4f4eaaa1fb2

  }

  ngOnInit(): void {
<<<<<<< HEAD
    this.getMenus();
=======
    this.mainMenuGet();
>>>>>>> 1048c2a3a64d2a44953fc7f8b50ad4f4eaaa1fb2
  }

}
