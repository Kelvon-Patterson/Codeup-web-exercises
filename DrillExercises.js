//
// // Make a function called returnTwo() that returns the number 2 when called
//
// function returnTwo(){
//     return 2
// }
// // Test this function with console.log(returnTwo())
// console.log(returnTwo())
// //     Make a function called sayHowdy() which console.logs the string “Howdy!”
// function sayHowdy(){
//     return console.log("Howdy!")
// }
//
// // Test this function by directly calling sayHowdy()
// sayHowdy()
// // Remember this function does not need a defined return value
//
// // Make a function called returnName() that returns the string of your name
// function returnName(){
//     return "Kelvon"
//
// }
// // Test this function with console.log(returnName())
// console.log(returnName())
// //     Make a function called addThree() which takes in a number input and returns the number plus 3.
// function addThree(num){
//     return num + 3
// }
// console.log(addThree(5))
// // Test this function with console.log(addThree(5))
// //     Make a function called sayString() which returns the string input passed in.
// function sayString(){
//     return "codeup"
// }
// console.log(sayString("codeup"))
// // Test this function with console.log(sayString('codeup'))

// went over function exercises again
function showMultiplicationTable(num){
    for(var i = 1; i < 10  ; i++){
        console.log(num + " x " + i + " = "+  (num * i) )
    }
 }
 showMultiplicationTable(7)

for(var i = 1 ; i < 10 ; i++ ){
    var random = Math.floor((Math.random() * 200) + 20);
    if(i % 2 === 0){
        console.log(random + " is even ")
    }else{
        console.log(random + " is odd ")
    }
}

for (var i = 1; i <= 9; i++){
    var output = '';
    for(var j = 1; j <= i; j++){
        output += i.toString()
    }
    console.log(output)

}




