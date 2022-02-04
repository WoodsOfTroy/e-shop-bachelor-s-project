import { Component, OnInit } from '@angular/core';
import { GetApiService } from 'src/services/get-api.service';
import { CardLogicService } from 'src/services/card-logic.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  productList: any;
  constructor(
    private getApi: GetApiService,
    private cardLogic: CardLogicService
  ) {}

  ngOnInit(): void {
    this.getApi.getGoods().subscribe((result) => {
      this.productList = result;
      this.productList.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });
      });
    });
  }
  addToCard(product: any) {
    this.cardLogic.addProductToCard(product);
  }
}
