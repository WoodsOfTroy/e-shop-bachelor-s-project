import { Component, OnInit } from '@angular/core';
import { CardLogicService } from 'src/services/card-logic.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  totalProducts: any = 0;
  constructor(private cardLogic: CardLogicService) {}

  ngOnInit(): void {
    this.cardLogic.getProductList().subscribe((result) => {
      this.totalProducts = result.length;
      if (this.totalProducts > 9) {
        this.totalProducts = '9+';
      }
    });
  }
  isCardOpen: boolean = false;
  cardOpen() {
    this.isCardOpen = !this.isCardOpen;
  }
}
