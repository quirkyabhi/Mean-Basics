let student= "shivam";
console.log(student);
let students:[number,string]=[101,"abhi"];
console.log(students);

function printName(name:string) {
    console.log("Hi "+ name);
}

function pname(name:string): string {
    return "hi "+ name
}
printName("Yash")
console.log(pname("abhi"))
let day:number=1;
switch (day) {
    case 0:
        console.log("It is sunday")
        break;
    case 1:
        console.log("It is sunday")
        break;

    default:
        break;
}