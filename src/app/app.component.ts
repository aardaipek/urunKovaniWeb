import { Component , EventEmitter, Output } from '@angular/core';
import {AppService} from "../app/app.service"
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mainMenu :object; 
  message : string;
  sideMenu : object;
  culture: string = "";
 

  constructor(public appService : AppService,public auth: AuthService) { 
    
  }
  

  async getAppSettings(){
    let appSettings = await this.appService.getAppSettings();
    this.mainMenu = appSettings["main_menu"];
    this.sideMenu = appSettings["side_menu"];

  }

  ngOnInit(): void {
    this.getAppSettings();
    
  }

}


