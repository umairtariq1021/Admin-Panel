import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';


@NgModule({
  declarations: [EmployeeManagementComponent],
  exports: [EmployeeManagementComponent],
  imports: [
    CommonModule
  ]
})
export class EmployeesModule { }
