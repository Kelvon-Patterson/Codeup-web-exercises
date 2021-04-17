/*
 * Complete the TODO items below
 */

const users = [
    {
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash']
    },
    {
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript']
    },
    {
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php']
    },
    {
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql']
    },
    {
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php']
    }
];

// TODO: fill in your name and email and add some programming languages you know
// to the languages array
// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
const name = 'Kelvon';
const email = 'kelvonpointer34@gmail.com';
const languages = ['html', 'javascript', 'CSS'];

// TODO: rewrite the object literal using object property shorthand
// users.push({
//     name: name,
//     email: email,
//     languages: languages
// });

//Object property shorthand

users.push({name, email, languages})

console.log(users)


// TODO: replace `var` with `let` in the following variable declarations
let emails = [];
let names = [];

// TODO: rewrite the following using arrow functions
users.forEach((user)=> {
    return emails.push(user.email);
});

users.forEach((user)=> {
    return names.push(user.name);
});


// or   for(let user of users){
//     names.push(user.name)
// }
console.log(names);
console.log(emails);


// TODO: replace `var` with `let` in the following declaration
let developers = [];
users.forEach(function(user) {
    // TODO: rewrite the code below to use object destructuring assignment
    //       note that you can also use destructuring assignment in the function
    //       parameter definition
    // const name = user.name;
    // const email = user.email;
    // const languages = user.languages;

        let {name, email, languages} = user

    // TODO: rewrite the assignment below to use template strings
//     developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));
;

    developers.push(`${name}'s email is ${email} and ${name} knows ${languages.join(',')} `)
})
console.log(developers)


// TODO: Use `let` for the following variable
// TODO: rewrite the assignment below to use template strings
let list = '<ul>';

// TODO: rewrite the following loop to use a for..of loop
for(let developer of developers){
    list += `<li> ${developer} </li>`
}
list += `</ul>`
console.log(list);



// developers.forEach(function (developer) {
//
//
//     list += '<li>' + developer + '</li>';
// });
// list += '</ul>';

function countWords(sentence) {
    const words = sentence.split(' '); // transform a sentence into an array of words
    const wordCountObject = words.reduce((wordCounts, word) => {
        if (typeof wordCounts[word] === 'undefined') {
            // if the word is not yet present in our object, set it's value to 1
            wordCounts[word] = 1;
        } else {
            // otherwise increment the existing count
            wordCounts[word] += 1;
        }
        return wordCounts;
    }, {}); // start with an empty object
    return wordCountObject;
}