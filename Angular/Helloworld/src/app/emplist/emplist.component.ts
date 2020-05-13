import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {
  @Input() public empData;

  constructor() { }

  ngOnInit(): void {
  }

}
