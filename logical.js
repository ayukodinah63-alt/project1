/*
Logical operators: allows you to combine multiple conditions
&&,AND; both condtion must be true
||, OR; at least one condition must be true
!, NOT; Reverses the Boolean result.



*/
let age = 25;
let hasID = true;

if (age>= 18 && hasID === true) {
    console.log("Acess granted");
    
} 
else 
    {
    console.log("Access Denied");
}

//Loan eligibilty

let agelevel =10;
let monthlyIncome = 40000;
let hasOutstandingLoan = false;
if (agelevel>=18 && monthlyIncome>=30000 && hasOutstandingLoan=== false) {
    console.log ("Eligible for loan");
    
}
else{
    console.log("Not eligible");
}

// Not reverse a boolean value

let isLoggedIn = true;
console.log (!isLoggedIn)

// !true  become false

let isBlocked = false;
if (!isBlocked){
    console.log ("User can proceed")
}