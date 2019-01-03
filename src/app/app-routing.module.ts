import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './common/login/login.component';
import { FooterComponent } from './common/footer/footer.component';


import { AdminModule } from './admin/admin.module';
import { EmployeeManagementComponent } from './admin/employees/employee-management/employee-management.component';
import { UserManagementComponent } from './admin/user/user-management/user-management.component';
import { ProductManagementComponent } from './admin/products/product-management/product-management.component';
import { HomeComponent } from './home/home.component';




const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'admin/employees',component:EmployeeManagementComponent},
  {path:'admin/users',component:UserManagementComponent},
  {path:'admin/products',component:ProductManagementComponent},
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes),
  AdminModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

