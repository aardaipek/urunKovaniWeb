import { Component, OnInit } from '@angular/core';
import {AppService} from "../../../app.service"

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent implements OnInit {

  constructor(public appService : AppService) { }

  ngOnInit(): void {
  }

}
