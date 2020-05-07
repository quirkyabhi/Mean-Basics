import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // template:`<div><h1> Hello
  // // </h1></div>`,
  template:`<div [class.text-blue]="isBlue">inline class template</div>
            <div [style.color]="hasError ? myColor:'green'" >Style inline binding</div>
  `,
  styles: [` 
  h1{
    color:red;
  }
  .text-blue{
    color:blue;
  }

  `],
  // styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name="abhi";
  firstName="Abhijeet"
  lastName="Pansari"
  contactNo=98271
  address="Raipur"
  hasError:boolean=false
  public myColor= "#EEEEEE";
  
  fName: String;
  lName:String;
  email:String;
  pwd:String;

  f:String;
  l:String;
  e:String;
  p:String;

  submit(a,b,c,d){
    this.fName = a;
    this.lName = b;
    this.email = c;
    this.pwd = d;

    if((this.fName== null||this.fName=="")||(this.lName== null||this.lName=="")||(this.email== null||this.email=="")||(this.pwd=="null"||this.pwd==" "))
    {
      // this.fName.removeClass("is-valid");
      // this.fName.addClass("is-invalid");
      this.f = "is-invalid" ;
      this.l = "is-invalid" ;
      this.e = "is-invalid" ;
      this.p = "is-invalid" ;
      alert("blank");
    } 
    else
    {
      // this.fName.removeClass("is-invalid");
      // this.fName.addClass("is-valid");
      this.f = "is-valid" ;
      this.l = "is-valid" ;
      this.e = "is-valid" ;
      this.p = "is-valid" ;
      alert("ok");
    }
  }

  color = 'red'
  status:boolean=false
  emp=[1,3,4,5,6,4,5]
  person:any={
    'id':101,
    'name':"abhi",
  }

  pname:string;
  personArray=[]
  displayPerson(name){
    this.personArray.push(name);
  }
  removePerson(i){
    // delete this.personArray[i]
    this.personArray.splice(i)
  }
  


  constructor() { }

  ngOnInit(): void {
  }

}

// fName: String;
//   lName:String;
//   email:String;
//   pwd:String;

//   f:String;
//   l:String;
//   e:String;
//   p:String;

//   submit(a,b,c,d){
//     this.fName = a;
//     this.lName = b;
//     this.email = c;
//     this.pwd = d;

//     if((this.fName== null||this.fName==" ")||(this.lName== null||this.lName==" ")||(this.email== null||this.email==" ")||(this.pwd=="null"||this.pwd==" "))
//     {
//       // this.fName.removeClass("is-valid");
//       // this.fName.addClass("is-invalid");
//       this.f = "is-invalid" ;
//       this.l = "is-invalid" ;
//       this.e = "is-invalid" ;
//       this.p = "is-invalid" ;
//       // alert("blank");
//     } 
//     else
//     {
//       // this.fName.removeClass("is-invalid");
//       // this.fName.addClass("is-valid");
//       this.f = "is-valid" ;
//       this.l = "is-valid" ;
//       this.e = "is-valid" ;
//       this.p = "is-valid" ;
//       // alert("ok");
//     }
//   }