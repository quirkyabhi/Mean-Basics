// // let student= "shivam";
// // console.log(student);
// // let students:[number,string]=[101,"abhi"];
// // console.log(students);

// // function printName(name:string) {
// //     console.log("Hi "+ name);
// // }

// // function pname(name:string, rollNo?: number): string {
// //     return "hi "+ name + " "+ rollNo;
// // }
// // printName("Yash")
// // console.log(pname("abhi"))
// // console.log(pname("abhi",101))
// // let day:number=1;
// // switch (day) {
// //     case 0:
// //         console.log("It is sunday")
// //         break;
// //     case 1:
// //         console.log("It is sunday")
// //         break;

// //     default:
// //         break;
// // }
// class Car{
//     model: string;
//     doors:number;
//     isElectric: boolean;
//     constructor(model:string, doors:number, isElectric:boolean ){
//         this.model= model;
//         this.doors= doors;
//         this.isElectric= isElectric;
//     }
//     displayCar():void{
//         console.log(`Details of car`);
//         console.log(`Model of car : ${this.model}`);
//         console.log(`Number of doors of car : ${this.doors}`);
//         console.log(`is electric or not : ${this.isElectric}`);
//     }
// }
// const honda= new Car('Honda City', 4, true)
// honda.displayCar();

// interface lookupPair{
//     key:number;
//     name:string;
// }

// let student: lookupPair={ key:101,name: "Nishant"};
// console.log(student.key)
// console.log(student.name)

var readLine= require('readline-sync');
var user = readLine.question("Enter name : ");
console.log(user)