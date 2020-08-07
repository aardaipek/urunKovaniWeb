import { Component , EventEmitter, Output } from '@angular/core';
import {AppService} from "../app/app.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mainMenu :object; 
  message : string;
  sideMenu : object;
  
  constructor(public appService : AppService) { 
    
  }
  

  async getAppSettings(){
    let appSettings = await this.appService.getAppSettings();
    this.mainMenu = appSettings["main_menu"];
    this.sideMenu = appSettings["side_menu"];

  }

  ngOnInit(): void {
    this.getAppSettings();
    this.message="atakan";

  }

}


