import { Component, OnInit } from '@angular/core';
import { AppService } from "../../../app.service"
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  topStoresShops : object;
  constructor(public appService: AppService,private router :Router) { }

  async getTopStoresShops() {
    let getTopStoresShops = await this.appService.getTopStoresShops();
    this.topStoresShops = getTopStoresShops;

  }
  ngOnInit(): void {
    this.getTopStoresShops();
  }

  gotoShop(id){
      const ID = id ? id : null;
      this.router.navigate(['/shop', { id: ID }]);
  }

}
