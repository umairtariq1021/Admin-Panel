import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementComponent } from './user-management/user-management.component';

@NgModule({
  declarations: [UserManagementComponent],
  exports: [UserManagementComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
