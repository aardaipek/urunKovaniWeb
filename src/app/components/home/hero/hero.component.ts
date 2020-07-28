import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  Menus : object;
  MenuCount : number;

  constructor(private http: HttpClient) { 

  }

  ngOnInit(): void {
    this.http.get ( 'https://localhost:44388/api/app/base_menu/3')
    .subscribe (data => {  
     this.Menus = data; 
     this.MenuCount = Object.keys(data).length;
    }) 
  }

 
}
