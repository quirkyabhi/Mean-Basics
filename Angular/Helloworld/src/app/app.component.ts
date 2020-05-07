import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Helloworld';
  disabled: boolean;
  name:string
  onClick(name){
    this.name=name
    // alert("button clicked")
    alert("hello " + name)
  }

  // fname:string 
  // lname:string
  // email:string
  // password:string

  // isComplete(this){
  //   if ((this.fname && this.lname &&this.email && this.password)!=null) {
  //     this.disabled=false
  //   } else {
  //     this.disabled=true
  //   }
  // }

  // result:number
  // onClick(no1,no2){
  //   this.result=parseInt(no1)+parseInt(no2)
  //   // alert("button clicked")
  //   // alert("hello " + name)
  // }
}
