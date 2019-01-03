import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductManagementComponent } from './product-management/product-management.component';

@NgModule({
  declarations: [ProductManagementComponent],
  exports: [ProductManagementComponent],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
