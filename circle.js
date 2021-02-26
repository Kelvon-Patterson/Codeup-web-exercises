"use strict";

// create a circle object
var circle = {
    radius: 3,

    getArea: function () {
        // TODO: complete this method
        // hint: area = pi * radius^2
        let area;
        area = Math.PI * Math.pow(3,2)
        return area; // TODO: return the proper value

    },

    logInfo: function (doRounding) {
        // TODO: complete this method.
        if(doRounding === true){
            return Math.round(this.getArea())
        }else {
             return "Area of a circle with radius: " + this.radius + ", is: " +this.getArea()
        }
        // If doRounding is true, round the result to the nearest integer.
        // Otherwise, output the complete value


    }
};

//use this when refrencing a property within the object we're working on..
console.log(circle.getArea().toFixed(2))
console.log(circle.logInfo(true))

// log info about the circle
console.log("Raw circle information");
circle.logInfo(false);
console.log("Circle information rounded to the nearest whole number");
circle.logInfo(true);

console.log("=======================================================");
// TODO: Change the radius of the circle to 5.

// log info about the circle
console.log("Raw circle information");
circle.logInfo(false);
console.log("Circle information rounded to the nearest whole number");
circle.logInfo(true);

// Define a function named convertDaystoHours that takes in one input Days. Return the conversion of the number of days into total hours. If the input is not numeric or a numeric string, convertDaystoHours, should return false.
//
//     Define a function named timesFour that takes in an input and multiples that input by four if it is numeric. If the input is not numeric, then return false.
//
//     Define a function named timesFour that takes in an input and multiples that input by four if it is numeric. If the input is not numeric, then return false.
//
//     Write a function named calculateTax that takes in two inputs representing the totalPaid and the taxPercent. If both inputs are numeric or numeric strings, calculateTax should return the total with tax added in a string looking like: "$XX.XX". If either or both inputs are not numeric or numeric strings, calculateTax should return false.