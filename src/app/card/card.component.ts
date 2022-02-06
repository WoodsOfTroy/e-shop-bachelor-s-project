import { Component, OnInit } from '@angular/core';
import { CardLogicService } from 'src/services/card-logic.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  productList: any = [];
  totalPrice: number = 0;
  constructor(private cardLogic: CardLogicService) {}

  ngOnInit(): void {
    this.cardLogic.getProductList().subscribe((result) => {
      this.productList = result;
      this.totalPrice = this.cardLogic.getTotalPrice();
    });
  }
  removeItemFromCard(product: any) {
    this.cardLogic.removeProduct(product);
  }
  emptyFromCard() {
    this.cardLogic.emptyCard();
  }
}
