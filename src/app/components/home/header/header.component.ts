import { Component, OnInit } from '@angular/core';
import {AppService} from "../../../app.service"
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  mainMenu : object;

  constructor(private http: HttpClient,public appService : AppService) { 


  }
  
  async getMenus(){
    this.mainMenu = await this.appService.getMainMenu();

  }

  ngOnInit(): void {
    this.getMenus();
  }

}
