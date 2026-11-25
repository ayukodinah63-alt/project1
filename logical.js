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
