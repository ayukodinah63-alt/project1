function congratulate(){
    console.log("congratulations you made it")
}
//congratulate();
let steps = 0;
let workoutTime = 60;
if(steps >= 1000 && workoutTime >= 30){
    congratulate();
} else {
    console.log("You need to do more work");
}