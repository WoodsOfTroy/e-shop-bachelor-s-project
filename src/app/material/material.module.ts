import { NgModule } from '@angular/core';

// Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';

const materialArray = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatNativeDateModule,
  MatBadgeModule,
  MatCardModule,
];

@NgModule({
  imports: [...materialArray],

  exports: [...materialArray],
})
export class MaterialModule {}
