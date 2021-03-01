//  Exercise 1
// On the line below, create a variable named onMarsRightNow and assign it the boolean value of false
// For more on variables, see https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables
var onMarsRightNow = false

    // Exercise 2
// For more on arrays, see https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
// Create a variable named fruits and assign it an array of strings containing the following fruits.
// mango, banana, guava, kiwi, and strawberry.
var fruits = ["mango", "banana", "guava", "kiwi", "strawberry"]

   // Exercise 3
// Create a variable named vegetables and assign it an array of strings containing the following vegetables.
// eggplant, broccoli, carrot, cauliflower, and zucchini
var vegetables = ["eggplant", "broccoli", "carrot", "cauliflower", "zucchini"]

// Exercise 4
// Create a variable named numbers and assign it an array of numbers, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
tt
// Exercise 5
// Add the string "tomato" to the end of the fruits array.
// *Hint* Recommend finding and using a built-in JS operation to add to an array rather than recreating the array.
fruits.push("tomato")
//assert(fruits, ["mango", "banana", "guava", "kiwi", "strawberry", "tomato"], "Exercise 5");

// Exercise 6
// add the string "tomato" onto the end of the vegetables array.
// Recommend using the built-in JS operation to add to an array.

vegetables.push("tomato")
//assert(vegetables,["eggplant", "broccoli", "carrot", "cauliflower", "zucchini", "tomato"], "Exercise 6");

// Exercise 7
// Given the array of numbers defined below, reverse the array of numbers that you created above.
var someNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

someNumbers.reverse()

//assert(someNumbers, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], "Exercise 7")
//addToDone("Exercise 7 is correct")



// Exercise 8
// Sort the vegetables in alphabetical order. Recommend finding a way to sort the array with a built-in method

vegetables.sort()

//assert(vegetables, ['broccoli', 'carrot', 'cauliflower', 'eggplant', 'tomato', 'zucchini'], "Exercise 8")
//addToDone("Exercise 8 is correct.")



// Exercise 9
// Write the code necessary to sort the fruits in reverse alphabetical order

fruits.sort().reverse()

//assert(fruits, ['tomato', 'strawberry', 'mango', 'kiwi', 'guava', 'banana'], "Exercise 9")
//addToDone("Exercise 9 is correct.")


// Exercise 10
// Write the code necessary to produce a single array that holds all fruits then all vegetables in the order as they were sorted above.
// Assign the result to a variable named fruitsAndVeggies.
// *hint* the search engine search here would be "how to combine two arrays in JavaScript", for example.

var fruitsAndVeggies = fruits.concat(vegetables)


//assert(fruitsAndVeggies, ['tomato', 'strawberry', 'mango', 'kiwi', 'guava', 'banana', 'broccoli', 'carrot', 'cauliflower', 'eggplant', 'tomato', 'zucchini'], "Exercise 10")
//addToDone("Exercise 10 is correct")

// Exercise 11
// Write a function definition for a function named addOne that takes in a number and returns that number plus one

function addOne(num){
    return num + 1

}

// Exercise 12
// Write a function definition named isPositive that takes in a number and returns true or false if that number is positive.
// Think about the definition of a number that is positive.
// Is 5 positive? Is 0.25 positive? Is 0.00001 positive? Is -0.001 positive?
// Is zero itself positive? What about infinity? What about negative infinity?
// If you get stuck, be sure to check the example code and documentation listed above
function isPositive(num){
    return num > 0

}


// Exercise 13
// Write a function definition named isNegative that takes in a number and returns true or False if that number is negative.
function isNegative(num){
    return num < 0

}

// Exercise 14
// Write a function definition named isOdd that takes in a number and returns true or false if that number is odd.
function isOdd(num){
    return num % 2 !==0

}

// Exercise 15
// Write a function definition named isEven that takes in a number and returns true or false if that number is even.
function isEven(num){
    return num % 2 === 0

}

// Exercise 16
// Write a function definition named identity that takes in any input and returns that input. Don't overthink this one!
function identity(num){
    return num
}

// Exercise 17
// Write a function definition named isPositiveOdd that takes in a number and returns true or false if the value is both greater than zero and odd
function isPositiveOdd(num){
    if(isPositive(num) && isOdd(num)){
        return true;
    }else{
        return false;
    }
}

// Exercise 18
// Write a function definition named isPositiveEven that takes in a number and returns true or false if the value is both greater than zero and even
function isPositiveEven(num){
    if( isEven(num) && isPositive(num)){
        return true;
    }else{
        return false;
    }
}

// Exercise 19
// Write a function definition named isNegativeOdd that takes in a number and returns true or false if the value is both less than zero and odd.
function isNegativeOdd(num){
    if(isNegative(num) && isOdd(num)){
        return true;
    }else{
        return false;
    }

}

// Exercise 20
// Write a function definition named isNegativeEven that takes in a number and returns true or false if the value is both less than zero and even.
function isNegativeEven(num){
    if(isNegative(num) && isEven(num)){
        return true;
    }else{
        return false;
    }
}

// Exercise 21
// Write a function definition named half that takes in a number and returns half the provided number.
function half(num){
    return num / 2
}

// Exercise 22
// Write a function definition named double that takes in a number and returns double the provided number.
function double(num){
    return num *2
}

// Exercise 23
// Write a function definition named triple that takes in a number and returns triple the provided number.
function triple(num){
    return num * 3
}
// Exercise 24
// Write a function definition named reverseSign that takes in a number and returns the provided number but with the sign reversed.
function reverseSign(num){
    return num * -1
}
// Exercise 25
// Write a function definition named absoluteValue that takes in a number and returns the absolute value of the provided number
function absoluteValue(num){
    return Math.abs(num)
}

// Exercise 26
// Write a function definition named isMultipleOfThree that takes in a number and returns true or false if the number is evenly divisible by 3.
function isMultipleOfThree(num){
    return num % 3 === 0;
}

// Exercise 27
// Write a function definition named isMultipleOfFive that takes in a number and returns true or false if the number is evenly divisible by 5.
function isMultipleOfFive(num){
    return num % 5 === 0;
}

// Exercise 28
// Write a function definition named isMultipleOfBothThreeAndFive that takes in a number and returns true or false if the number is evenly divisible by both 3 and 5.
function isMultipleOfBothThreeAndFive(num){
    return isMultipleOfThree(num) && isMultipleOfFive(num);
}

// Exercise 29
// Write a function definition named square that takes in a number and returns the number times itself.
function square(num){
    return num * num
}

// Exercise 30
// Write a function definition named add that takes in two numbers and returns the sum.
function add(num1,num2){
    return num1 + num2
}

// Exercise 31
// Write a function definition named cube that takes in a number and returns the number times itself, times itself.
function cube(num){
    return Math.pow(num,3)
}

// Exercise 32
// Write a function definition named squareRoot that takes in a number and returns the square root of the provided number
function squareRoot(num){
    return Math.sqrt(num)
}

// Exercise 33
// Write a function definition named subtract that takes in two numbers and returns the first minus the second argument.
function subtract(num1,num2){
    return num1 - num2
}

// Exercise 34
// Write a function definition named multiply that takes in two numbers and returns the first times the second argument.
function multiply(num1, num2){
    return num1 * num2
}
// Exercise 35
// Write a function definition named divide that takes in two numbers and returns the first argument divided by the second argument.
function divide(num1, num2){
    return num1 / num2
}
// Exercise 36
// Write a function definition named quotient that takes in two numbers and returns the quotient of dividing the first argument by the second argument.
function quotient(num1, num2){
    return (num1 / num2)>>0
}

// Exercise 37
// Write a function definition named remainder that takes in two numbers and returns the remainder of first argument divided by the second argument.
function remainder(num1,num2){
    return num1 % num2
}
// Exercise 38
// Write a function definition named sumOfSquares that takes in two numbers, squares each number, then returns the sum of both squares.
function sumOfSquares(num1,num2){
    return square(num1)+square(num2)
}

// Exercise 39
// Write a function definition named timesTwoPlusThree that takes in a number, multiplies it by two, adds 3 and returns the result.
function timesTwoPlusThree(num){
    return (num * 2)+3
}
// Exercise 40
// Write a function definition named areaOfRectangle that takes in two numbers and returns the product.
function areaOfRectangle(num1, num2){
    return num1 *num2
}

// Exercise 41
// Write a function definition named areaOfCircle that takes in a number representing a circle's radius and returns the area of the circle
function areaOfCircle(radius){
    return Math.PI * (Math.pow(radius,2))

}

// Exercise 42
// Write a function definition named circumference that takes in a number representing a circle's radius and returns the circumference.
function circumference(radius){
    return 2 * (Math.PI * radius)
}
// Exercise 43

// Write a function definition named isVowel that takes in value and returns true if the value is a, e, i, o, u in upper or lower case.
function isVowel(x){

    var isVowel ;

    if(x ==  "A" || x == "E" || x == "I" || x == "O" || x == "U" || x == "a" || x == "e" || x == "i" || x == "o" || x == "u" ) {
        return true;
    }
    else{
        return false;
    }

}

function hasVowels(string) {
    if (string.match(/[aeiou]/ig))
        return true;

    else{
        return false;
    }
}