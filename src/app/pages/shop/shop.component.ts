import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  shopId : number;
  shopInfo: object;
  constructor(public router : Router, public activatedRoute : ActivatedRoute, public appService : AppService) { }

    async getShopInfo(id){
    let shopInfo = await this.appService.getShopInfo(id);
    this.shopInfo = shopInfo;
  }
  ngOnInit(): void {
    let urlId = this.activatedRoute.url['value']['1']['path'];
    this.getShopInfo(parseInt(urlId));
  }
}
