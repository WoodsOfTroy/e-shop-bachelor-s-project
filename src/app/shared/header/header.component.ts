import { Component, OnInit } from '@angular/core';
import { CardLogicService } from 'src/services/card-logic.service';

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
}
