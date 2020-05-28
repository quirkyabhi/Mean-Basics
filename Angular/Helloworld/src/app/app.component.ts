import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  signupObj:any={};
  onSubmit(){
    alert("Success  "+ JSON.stringify(this.signupObj) )
  }

loginForm= new FormGroup({
  email: new FormControl('', Validators.required),
  password: new FormControl('', Validators.required)
})
get email(){
  return this.loginForm.get('email')
}

get password(){
  return this.loginForm.get('password')
}

  title = 'Helloworld';
  disabled: boolean;
  name:string
  onClick(name){
    this.name=name
    // alert("button clicked")
    alert("hello " + name)
  }
  of="app data"
  message=""
   public date = new Date();
  //  emp=[
  //    {"id":101,"name":"abhi","salary":55000,"dept":"DB"},
  //    {"id":102,"name":"abhijeet","salary":65000,"dept":"Testing"},
  //    {"id":103,"name":"avi","salary":45000,"dept":"Cloud"}
  //   ]
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
