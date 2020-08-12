import { Component, OnInit } from '@angular/core';
import { AppService } from "../../../app.service"

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  topStoresShops : object;
  constructor(public appService: AppService) { }

  async getTopStoresShops() {
    let getTopStoresShops = await this.appService.getTopStoresShops();
    this.topStoresShops = getTopStoresShops;

  }
  ngOnInit(): void {
    this.getTopStoresShops();
  }

}
