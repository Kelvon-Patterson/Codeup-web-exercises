// var areWeThereYet;
//
// console.log(areWeThereYet);
//
// if(!areWeThereYet){
//     //do some stuff?
// }
//
// while(!areWeThereYet){//is it TRUE we are there yet?
//     areWeThereYet = confirm("Are we there yet?")
// }
//
// var haveToy = confirm("can I have the toy please?")
//
// while(!haveToy){
//     haveToy= confirm("Please?")
// }
//
// if(haveToy){
//     alert("Thanks!! You're the best, can't wait to go outside!")
// }
//
//refactor away form ! operator

// var waitingForToy = confirm("Are we still waiting for the toy?")
//
// while(waitingForToy){
//     waitingForToy= confirm("Well, how about now? Are we still waiting for the toy?")
// }
//
// if(!waitingForToy){// until true we'll never get down here
//     alert("Thanks!! You're the best, can't wait to go outside!")
// }
 //make while loop that runs as long as X <10

// var x = 10;
// while(x > 0){
//      x++;
//     console.log(x--)
// 1st console.log will show the number 9 because if condition was already checked for 10.
// }
//console.log("Hello i'm down here" + x )


// var onTheRoad = true;
//
// while(onTheRoad){
//     onTheRoad= confirm("Are we still traveling?")
// }
// alert("We're here!")
//
// var weatherIsMessy = true;
//variable for our condition
//while(weatherIsMessy){
//     //if true >>> do some stuff
//     alert("Well, lets have some hot cocoa! ")
//     weatherIsMessy = confirm("Is it still messy?")
//     //once the loop is false the loop will break and code will continue to next code block
// }
// alert("Finally some sun!")
// // code executed once while loop condition is false;
//
// function decrementFromTen() {
//     var x = 10;
//     while (x > 0) {
//         x++;
//         console.log(x--)
//
//     }
// return console.log("Hey, I finished counting!")
// }
// decrementFromTen()
//
// how about a function where the user gives us a num
// then from the num we increment until ten
//
//  var num = prompt("can you pick a num?")
//
// function incrementUntilTen(num){
//     while(num < 10){
//         num = num + 1;
//         console.log(num)
//     }
//     console.log("Wrapped up counting") }
//
//
// Can you tell me how many times my look has run?
//     TO BE CONTINUED
//
// Lets put a do while loop into a function
// function to log num until greater than 100
// What differences in behavior will we see

// for (var incrementer = 1; incrementer <= 1-; incrementer++){
//     console.log("This loop has run" + incrementer + "time(s).");
// }

//The for loop has more to it as you can see . Let's break down the arguments:

//- incrementer initilization - Here we are declaring the var for out incrementer as well as its value

//-condition- The loop will continue to run until this condition is no longer true.

//-incrementer change- what happens to the incrementer in once the loop has finished executing the code for a given interation.

// say Hello to Marco in a console for five times- lets use a for loop.

//for(var increment = 0 ; increment<5 ; increment++){
   // console.log("Hello, Marco! We've said hello " + (increment +  1) + " times!")
//}


// function sayHelloXTimes(num){
//     for(num; num>=0;num--){
//         if(num %5 === 0){
//             console.log("Howdy! Currently num is : " + num);
//         } else {
//             console.log("Hello! Currently num is : " + num);
//         }
//     }
//     return "Hello!";
// }
// sayHelloXTimes(6)

//BREAK AND CONTINUE ways to manipulate the behavior of your loop

// for( var i = 5 ; i < 100 ; i + 5) {
//     console.log(i)
//     if (i === 60) {
//         break;
//     }





// for( var i = 0 ; i < 100 ; i++) {
// // if condition true continue to look while i <100
//     if (i % 2 !==0) {
//         continue;
//     }
//     console.log(i);
// }

// Close out lecture :Lets do a CODE BUZZ
//Whenever a number is divisible by SIX: print "CODEUP"
//Whenever a number is divisible by TWO: print "CODE"
//Whenever a number is divisible by THREE: print "UP"
//If num is 25, do not print that number
//OTHERWISE: prong the number :)
for (var i= 1; i < 50 ; i++) {
    if (i === 25){
    continue;
    }else if(i % 6 === 0){
        console.log("Codeup")
    }else if(i % 2 === 0){
        console.log("Code")
    }else if(i % 3 === 0){
        console.log("Up")
    }

 //If nothing above matches" print that number!
    console.log(i)

}



