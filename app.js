let steps = 1500;
let workoutTime = 60;
let user ="Dinah";
let day = "Monday";
function congratulate(user, steps, workoutTime, day){
    console.log(`congratulations you made it! ${user}, you have walked ${steps} steps and worked out for ${workoutTime} minutes on ${day}`);
}
//congratulate();

if(steps >= 1000 && workoutTime >= 30){
    congratulate(user, steps, workoutTime, day );
} else {
    console.log("You need to do more work");
}
/*Parameters; are used to provide additional information to a function, allowing it to perform tasks based on the values passed to it.
When a function has params we need to provode the arguments when callling it to pass the necessary information.
Arguments: actuall values we are passing to the function.
Params: variables defined inside a function to accept values
Literal ; values that you write directly inot your code.
Backticks: helps you insert variables directly inside a string without concatenating them using + sign
interpulation; inserting a variable or expression inside a string. e.g. &{user}
*/
  