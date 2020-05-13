import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css']
})
export class EmpdetailsComponent implements OnInit {
  @Input() public empData;
  constructor() { }

  ngOnInit(): void {
  }

}
