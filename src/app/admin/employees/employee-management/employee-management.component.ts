import { Component, OnInit, ViewChild } from '@angular/core';
declare var $:  any; 
@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.css']
})
export class EmployeeManagementComponent implements OnInit {
  @ViewChild('dataTable') table;
  dataTable: any;
  constructor() { }

  ngOnInit(): void {
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.dataTable();
  }

}
