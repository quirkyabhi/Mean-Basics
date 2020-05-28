import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {
  // @Input() public empData;

  constructor(private _empService:EmployeeService, private router: Router) { }
  empData=[];
  ngOnInit(): void {
  // this.empData= this._empService.getEmployees()
  this._empService.getEmployees().subscribe(data => this.empData= data)

  }
 goToDetails(empData){
  this.router.navigate(['/employeeDetails', empData.id])
 }
}
