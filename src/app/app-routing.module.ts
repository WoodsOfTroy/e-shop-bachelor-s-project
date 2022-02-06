import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { ProductListComponent } from './product-list/product-list.component';
// import { CardComponent } from './card/card.component';
import { SuccusessComponent } from './succusess/succusess.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },

  { path: 'succusess', component: SuccusessComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
