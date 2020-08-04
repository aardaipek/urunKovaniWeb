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
  categoryShow : boolean;
  url : string;
  @Input() sideMenus: object;

  constructor(private http: HttpClient,public appService : AppService,public route: ActivatedRoute) { 
    
  }

  categoryClose(categoryStatus){
    if(categoryStatus)
    this.categoryShow= false;
    else
    this.categoryShow = true;
  }

  ngOnInit(): void {
    this.url = this.route.routeConfig.path;

    if(!this.url)
    this.categoryShow = true;

  }

 
 
}
