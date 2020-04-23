var readLine = require('readline-sync');
var no1 = readLine.question("Enter number 1 : ");
// var no2:number = readLine.question("ENter number 2 : ");
function reverse(no) {
    var temp = 0;
    while (no >= 1) {
        temp = no % 10 + temp * 10;
        no = Math.floor(no / 10);
    }
    return temp;
}
function palindrome(no) {
    var temp = no;
    if (temp == reverse(no)) {
        console.log("palindrome");
    }
    else {
        console.log("Not palindrome");
    }
}
function checkPrime(no) {
    var flag = 0;
    for (var index = 2; index < no / 2; index++) {
        if (no == 0 || no == 1) {
            console.log("not prime");
            break;
        }
        if (no % index == 0) {
            flag++;
            break;
        }
    }
    if (flag == 0) {
        console.log("prime");
    }
    else {
        console.log("not prime");
    }
}
function checkLength(no) {
    var len = 0;
    while (no >= 1) {
        no = no / 10;
        len++;
    }
    // console.log(len)
    return len;
}
function power(no, pow) {
    var temp = 0;
    while (no >= 1) {
        temp = Math.pow((no % 10), pow) + temp;
        no = Math.floor(no / 10);
        // console.log(temp)
    }
    // console.log(temp)
    return temp;
}
function checkArmstrong(no) {
    var temp = no;
    var len = checkLength(no1);
    if (temp == power(no, len)) {
        console.log("armstrong");
    }
    else {
        console.log("Not armstrong");
    }
}
function checkFactorial(no) {
    var fac = 1;
    console.log(no);
    for (var index = 1; index < no; index++) {
        fac = index * fac + fac;
        console.log(fac);
    }
    console.log(" Factorial is : " + fac);
}
palindrome(no1);
checkPrime(no1);
// checkLength(no1)
checkArmstrong(no1);
checkFactorial(no1);
