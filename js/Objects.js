"use strict";

/**
 * TODO:
 * Create an object with firstName and lastName properties that are strings
 * with your first and last name. Store this object in a variable named
 * `person`.
 *
 * Example:
 *  > console.log(person.firstName) // "Rick"
 *  > console.log(person.lastName) // "Sanchez"
 */
var person ={
    firstName: "Kelvon",
    lastName: "Patterson"
}

/**
 * TODO:
 * Add a sayHello method to the person object that returns a greeting using
 * the firstName and lastName properties.
 * console.log the returned message to check your work
 *
 * Example
 * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
 */
var sayHello = "Hello, " + person.firstName +" "+ person.lastName

console.log(sayHello)
console.log("******************")
/** TODO:
 * HEB has an offer for the shoppers that buy products amounting to
 * more than $200. If a shopper spends more than $200, they get a 12%
 * discount. Write a JS program, using conditionals, that logs to the
 * browser, how much Ryan, Cameron and George need to pay. We know that
 * Cameron bought $180, Ryan $250 and George $320. Your program will have to
 * display a line with the name of the person, the amount before the
 * discount, the discount, if any, and the amount after the discount.
 *
 * Uncomment the lines below to create an array of objects where each object
 * represents one shopper. Use a foreach loop to iterate through the array,
 * and console.log the relevant messages for each person
 */

var shoppers = [
    {name: 'Cameron', amount: 180},
    {name: 'Ryan', amount: 250},
    {name: 'George', amount: 320}
];

shoppers.forEach(function(shopper){
    console.log("Price before disc. for " + shopper.name + " " + shopper.amount)
    if(shopper.amount > 200){
        shopper.amount -= (shopper.amount * .012)
    }
    console.log("Price after disc. " + shopper.name + " " + shopper.amount)
})

console.log(shoppers)
console.log("******************")
/** TODO:
 * Create an array of objects that represent books and store it in a
 * variable named `books`. Each object should have a title and an author
 * property. The author property should be an object with properties
 * `firstName` and `lastName`. Be creative and add at least 5 books to the
 * array
 *
 * Example:
 * > console.log(books[0].title) // "The Salmon of Doubt"
 * > console.log(books[0].author.firstName) // "Douglas"
 * > console.log(books[0].author.lastName) // "Adams"
 */

var books =[
    {
    title: "Percy Jackson and The Olympians",
    author: {
        firstName: "Rick",
        lastName: "Riordan"
    },
    },
    {
        title: "Clockwork Angel",
        author: {
            firstName: "Cassandra",
            lastName: "Clare"
        },
    },
    {
        title: "Unwind",
        author: {
            firstName: "Neal",
            lastName: "Schusterman"
        },
    },
    {
        title: "All the Light We Cannot See",
        author: {
            firstName: "Anthony",
            lastName: "Doerr"
        },
    },
    {
        title: "The Way I Used To Be",
        author: {
            firstName: "Amber",
            lastName: "Smith"
        },
    },



];
console.log(books[0].title)
console.log(books[0].author.firstName)
console.log(books[0].author.lastName)

console.log("******************")
/**
 * TODO:
 * Loop through the books array and output the following information about
 * each book:
 * - the book number (use the index of the book in the array)
 * - the book title
 * - author's full name (first name + last name)
 *
 * Example Console Output:
 *
 *      Book # 1
 *      Title: The Salmon of Doubt
 *      Author: Douglas Adams
 *      ---
 *      Book # 2
 *      Title: Walkaway
 *      Author: Cory Doctorow
 *      ---
 *      Book # 3
 *      Title: A Brief History of Time
 *      Author: Stephen Hawking
 *      ---
 *      ...
 */
books.forEach(function (book,index){
    console.log("Book # " + (index+1) )
    console.log("Title: " + book.title)
    console.log("Author: " + book.author.firstName + " " + book.author.lastName)
    console.log("---")
})


// or we could do
// console.log("Book # " + (index+1) + "\nTitle: " + book.title + "\nAuthor: " + book.author.firstName + " " + book.author.lastName + "\n---")



/**
 * Bonus:
 * - Create a function named `createBook` that accepts a title and author
 *   name and returns a book object with the properties described
 *   previously. Refactor your code that creates the books array to instead
 *   use your function.
 * - Create a function named `showBookInfo` that accepts a book object and
 *   outputs the information described above. Refactor your loop to use your
 *   `showBookInfo` function.
 */
var title = prompt("What is your favorite book?")
var authorFirstName = prompt("Whats the first name of the author?")
var authorLastName=prompt("Whats the last name of the author?")


function createBook(bookTitle, authorFirstName,authorLastName) {
    return {
        title: bookTitle,
        author: {
            firstName: authorFirstName,
            lastName: authorLastName
        }
    }
}

console.log(createBook(title,authorFirstName,authorLastName))

function showBookInfo(book){
    console.log("Title: " + book.title)
    console.log("Author: " + book.author.firstName + " " + book.author.lastName)


}
books.forEach(showBookInfo)

//kelvon now to step it up for another test see if you can add a book to books using createBook and show the array book using showBookInfo