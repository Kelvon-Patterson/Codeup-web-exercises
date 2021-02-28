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


