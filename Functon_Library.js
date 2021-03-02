//Random number variable
var random = Math.floor((Math.random() * 3) + 1);

function randomNegativeEvenNumber() {
    var randomNumber = Math.ceil(Math.random() * -100) - 10;
    if(randomNumber % 2 === 0) {
        return randomNumber;
    }

    return randomNegativeEvenNumber();
}

function plusTwo(x){
    return x + 2
}

function isOdd(number){
    return number % 2 == 1 || number % 2 === -1;
}

function double(num){
    return num*2
}

function absoluteValue(num){
    return  Math.abs(num);
}

function square(num){
    return (num)*(num);
}

function cube(num){
    return Math.pow(num, 3);
}

function quotient(num1, num2) {
    return (num1 / num2)>>0;
}

function areaOfCircle(radius){
    return  Math.PI * radius * radius;
}

function circumference(radius) {
    return 2 * Math.PI * radius;
}

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
function removeVowels(str) {
    return str.replace(/[aeiou]/ig, '')
}

function startsWithVowel(str){
    var vowels = ("aeiouAEIOU");
    return vowels.indexOf(str[0]) !== -1;
}

function endsWithVowel(str){
    return isVowel(str.charAt(str.length - 1))
}

function isANumber(num){
    return typeof num === 'number'
}