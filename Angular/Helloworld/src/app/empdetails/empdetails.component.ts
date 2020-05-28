import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css']
})
export class EmpdetailsComponent implements OnInit {
  // @Input() public empData;
  constructor(private _empService:EmployeeService, private route: ActivatedRoute) { }
  empData=[];
  Id:number
  ngOnInit(): void {
    // console.log(this.route.snapshot.params)
    this.Id =this.route.snapshot.params.id
    // console.log(Id.id)
  // this.empData= this._empService.getEmployees()
  this._empService.getEmployees().subscribe(data => this.empData =data)


  }

}
