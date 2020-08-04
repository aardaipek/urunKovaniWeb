import { HttpClient } from '@angular/common/http';
import { Component, OnInit,Input} from '@angular/core';
import {AppService} from "../../../app.service"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() mainMenus: object;

  constructor(private http: HttpClient,public appService : AppService) { 


  }
  


  ngOnInit(): void {
  }

}
