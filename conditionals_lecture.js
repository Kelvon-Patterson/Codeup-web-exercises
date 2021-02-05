var myAge = 24;

var requiredAge = 18;

var myName = "Kelvon"

var userAge = prompt("How old are you ?")

//this is an if/else statement
if(myAge>= requiredAge){
    console.log("You can make a social media account");
} else {
    console.log("You are not old enough to make an account!");
}

var monthsSinceOilChange = 3;

var minNumberOfMonthsForOilChange = 6 ;

if(monthsSinceOilChange< minNumberOfMonthsForOilChange){
    console.log("You're good you don't need an oil change you got one " +monthsSinceOilChange + " ago");
} else {
    console.log("You should most def get an oil change");
}

var favoriteColor = "Green";

if(favoriteColor === "Red"){
    console.log("Hey my favorite color is Red too!")
} else if (favoriteColor === "Green"){
    console.log("Hey Green is my favorite color too!")
}else{
    console.log("We dont have the same favorite color sadly lol")
}