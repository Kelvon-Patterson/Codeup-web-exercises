const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//TODO: Create a file named map-filter-reduce.js in your js directory and copy the users data below into it.

//TODO :    Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

let moreThanThreeLang = users.filter(language=> language.languages.length >= 3
)
console.log(moreThanThreeLang)
//TODO:     Use .map to create an array of strings where each element is a user's email address

let userEmail = users.map(emails => emails.email  )
console.log(userEmail)

//TODO: Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

let avgYearsExp = users.reduce((total, years)=>{
    return ((total + years.yearsOfExperience)/ users.length)
},0)
console.log(avgYearsExp)
//TODO:     Use .reduce to get the longest email from the list of users.


let longestEmail= users.reduce((result,user)=>{
//     user.email.length > result.length ? result = user.email : result

if(user.email.length > result.length){
   result = user.email
}
return result
},'')

console.log(longestEmail);
//TODO:     Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

let listOfNames = users.reduce((result, user)=>{
    return `${result}  ${user.name} ,`
}, 'instructors are:').slice(0, -1) + '.';
console.log(listOfNames)
//TODO: BONUS: -- Use .reduce to get the unique list of languages from the list of users.

let uniqueLanguages = users.reduce((array, user,index) =>{



}, [])

console.log(uniqueLanguages)
// var uniqueArray = [];
//
// // Loop through array values
// for(var value of array){
//     if(uniqueArray.indexOf(value) === -1){
//         uniqueArray.push(value);
//     }
// }
// return uniqueArray;
// }