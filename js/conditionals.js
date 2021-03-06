
    "use strict";

    /* ########################################################################## */

    /**
     * TODO:
     * Create a function named `analyzeColor` that accepts a string that is a color
     * name as input. This function should return a message that related to that
     * color. Only worry about the colors defined below, if the color passed is not
     * one of the ones defined below, return a message that says so
     *
     * Example:
     *  > analyzeColor('blue') // returns "blue is the color of the sky"
     *  > analyzeColor('red') // returns "Strawberries are red"
     *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
     *
     * You should use an if-else-if-else block to return different messages.
     *
     * Test your function by passing various string literals to it and
     * console.logging the function's return value
     */
function analyzeColor(colors) {
        if (colors === 'blue') {
            return console.log(" Blue is the color of the sky!");
        } else if (colors === 'red') {
            return console.log("Strawberries are red")
        } else if (colors === 'cyan') {
            return console.log("I don't know anything about cyan");
        }else {

            return console.log("I don't know anything about cyan");
        }
    }






// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    /**
     * TODO:
     * Pass the `randomColor` variable to your function and console.log the results.
     * You should see a different message every time you refresh the page
     */
analyzeColor(randomColor)
    console.log(randomColor)
    /**
     * TODO:
     * Refactor your above function to use a switch-case statement
     */
    switch (analyzeColor(colors)){

        case 'blue' :
            console.log(" Blue is the color of the sky!")
    break;
        case 'red' :
             console.log("Strawberries are red")
    break;
        case "cyan":

             console.log("I don't know anything about that color");
        break;

    }
    /**
     * TODO:
     * Prompt the user for a color when the page loads, and pass the input from the
     * user to your `analyzeColor` function. Alert the return value from your
     * function to show it to the user.
     */
var usersPick = prompt("Chose a color !")
    analyzeColor(usersPick)
    alert("The user chose " + usersPick)

    /* ########################################################################## */

    /**
     * TODO:
     * Suppose there's a promotion in Walmart, each customer is given a randomly
     * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
     * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
     * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
     * all for free!.
     *
     * Write a function named `calculateTotal` that accepts a lucky number and total
     * amount, and returns the discounted price.
     *
     * Example:
     * calculateTotal(0, 100) // returns 100
     * calculateTotal(4, 100) // returns 50
     * calculateTotal(5, 100) // returns 0
     *
     * Test your function by passing it various values and checking for the expected
     * return value.
     */



    function calculateTotal(luckyNumber, totalAmount) {

        switch (luckyNumber) {
            case 0:
                return (totalAmount)
                break;
            case 1:
                totalAmount = (totalAmount - (totalAmount * .10))
                return (totalAmount)
                break;
            case 2:
                totalAmount = (totalAmount - (totalAmount * .25))
                return(totalAmount)
                break;
            case  3:
                totalAmount = (totalAmount - (totalAmount * .35))
                return(totalAmount)
                break;
            case 4:
                totalAmount = (totalAmount - (totalAmount * .50))
                return (totalAmount)
                break;
            case 5:
                totalAmount = 0
                return (totalAmount)
                break;

        }
    }
    console.log(calculateTotal(4,100))


    /**
     * TODO:
     * Uncomment the line below to generate a random number between 0 and 6.
     * Prompt the user for their total bill, then use your `calculateTotal` function
     * and alerts to display to the user what their lucky number was, what their
     * price before the discount was, and what their price after the discount is.
     */
 //Generate a random number between 0 and 6
   var luckyNumber = Math.floor(Math.random() * 6);

    var usersBill = Number(prompt("What was your total bill?"))

    var userLuckyNumber =  alert("Your lucky number was " + luckyNumber)

   alert(" Before discount your bill was " + usersBill)

    alert(" After discount your bill total was " + calculateTotal(luckyNumber,usersBill ) + " ! ")


    // calculateTotal(usersBill,userLuckyNum)

    /**
     * TODO:
     * Write some JavaScript that uses a `confirm` dialog to ask the user if they
     * would like to enter a number. If they click 'Ok', prompt the user for a
     * number, then use 3 separate alerts to tell the user:
     *
     * - whether the number is even or odd
     * - what the number plus 100 is
     * - if the number is negative or positive
     *
     * if what the user enters is not a number, use an alert to tell them that, and
     * do *not* display any of the above information.
     *
     * Can you refactor your code to use functions?
     * HINT: The way we prompt for a value could be improved
     */
    // function isNotNum() {
    //      if (isNaN(userNum)=== true)  {
    //           alert("that's not a number silly")
    //    }
    //      else {
    //          return false;
    //      }
    //  }
    // function isPositive(x) {
    //     var isPositive= (x>0);
    //     if (x>0) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
    // function isOdd(x){
    //     return x % 2 == 1 || x % 2 === -1;
    // }
    // function isEven(x){
    //     var isEven = (x % 2==0)
    //     if (x % 2==0){
    //         return true;
    //     }
    //     else {
    //         return false;
    //     }
    // }
    // function isNegative(x) {
    //     var isNegative = (x<0);
    //     if (x<0) {
    //         return true;
    //     }
    //     else {
    //         return false;
    //     }
    // }
    //  function plusHundred(x){
    //     return Number(x) + 100
    //  }
    // var userNum = Number(prompt(" Would you like to enter a number? "))
    // alert("Number is positive is " + isPositive(userNum))
    // alert("Number is negative is " + isNegative(userNum))
    // alert("Number is even is " + isEven(userNum))
    // alert("Number is odd is " + isOdd(userNum))
    // alert("This number plus 100 is " + Number(plusHundred(userNum)))
    // isNotNum(userNum)
    //###################################################


    var userNum = Number(prompt(" Would you like to enter a number? "))
isNotNum(userNum)
    function isNotNum() {
        if (isNaN(userNum)=== true)  {
             alert("This is not a number silly")
        }else{
            return false;
        }
    }
    isPositive(userNum)
    function isPositive(userNum) {
        if (userNum > 0) {
           alert("Number is positive ");
        } else {
            return false;
        }
    }
    isOdd(userNum)
    function isOdd(userNum){
        var isOdd =  userNum % 2 === 1 || userNum % 2 === -1;
        if (userNum === isOdd){
             alert("Number is odd  " )
        }
        else{
            return false;
        }
    }


    isNegative(userNum)
    function isNegative(userNum) {
        if (userNum<0) {
             alert("Number is negative ");
        }
        else {
            return false;
        }
    }
    isEven(userNum)
    function isEven(x){
        if (x % 2===0){
           alert("This number is even")
        }
        else {
           return false;
       }
   }
   plusHundred(userNum)
   function plusHundred(x) {
       alert("This number plus 100 is " + Number(x + 100))
   }



