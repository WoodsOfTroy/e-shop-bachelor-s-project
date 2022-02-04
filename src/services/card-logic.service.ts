import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardLogicService {
  cartItemList: any = [];
  productList = new BehaviorSubject<any>([]);
  search = new BehaviorSubject<string>('');

  constructor() {}
  getProductList() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addProductToCard(product: any) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
  }
  getTotalPrice(): number {
    let totalPrice = 0;
    this.cartItemList.map((priceOfProduct: any) => {
      totalPrice += priceOfProduct.total;
    });
    return totalPrice;
  }
  removeProduct(product: any) {
    this.cartItemList.map((prod: any, index: any) => {
      if (product.id === prod.id) {
        this.cartItemList.splice(index, 1);
      }
    });
    this.productList.next(this.cartItemList);
  }
  emptyCard() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
}
