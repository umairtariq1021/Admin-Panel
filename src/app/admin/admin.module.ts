import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModule } from './user/user.module';
import { ProductsModule } from './products/products.module';
import { EmployeesModule } from './employees/employees.module';
import { EmployeeManagementComponent } from './employees/employee-management/employee-management.component';
import { UserManagementComponent } from './user/user-management/user-management.component';
import { ProductManagementComponent } from './products/product-management/product-management.component';


@NgModule({
  declarations: [
    
    ],
    exports:[
      EmployeeManagementComponent,
      UserManagementComponent,
      ProductManagementComponent

    ],
  imports: [
    CommonModule,
    UserModule,
    ProductsModule,
    EmployeesModule
    
    
  ]
})
export class AdminModule { }
