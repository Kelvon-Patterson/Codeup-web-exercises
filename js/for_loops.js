function showMultiplicationTable(num){
    for(var i = 1; i <= 10 ; i++){
        console.log(num + " x " + i +  " = " + (i * num))
    }
}
showMultiplicationTable(7)



for (var i = 1; i <= 10; i++){

    var random = Math.floor(Math.random() * 200) + 20

    if(random % 2 === 0){
        console.log(random + " is even ")
    }else {
        console.log( random + " is odd")
    }
}

for(var i = 1; i <= 9; i++){
    output = ''
    for(var j = 1; j <= i; j++){
        output+= i.toString()
    }
   console.log(output)
}

for (var i = 100; i >= 5 ; i-=5 ){
console.log(i)
}


var userNum= Number(prompt("Give me a number between 1 & 50"))

function isNumberInRange(num){
    return num>= 1 && num <= 50
}
function isNumberEven(num){
    return num % 2 ===0
}

while (true) {

    if (!isNumberEven(userNum) && isNumberInRange(userNum)) {
        break;
    }
    userNum = Number(prompt("Give me a number between 1 & 50"));
}
    console.log("Number to skip is : " + userNum)

for(var i = 1 ; i <=49 ; i += 2){
    if(i === userNum) {
        console.log('This is the number were skipping:' + i)
    continue;
    }
    console.log("Here is a number were skipping " + i)
}



var i = 1

while(i < 65536){
    i*=2
    console.log(i)

}

var allCones = Math.floor(Math.random() * 50) + 50;


console.log('The number of cones to sell is ' + allCones)

do {
    var someCones =Math.floor(Math.random() * 5) + 1;

    if(someCones <= allCones){

        allCones-= someCones

        console.log('Cones sold ' + someCones + 'cones, and have ' + allCones + " left" )
    }else{
         console.log("Sorry I dont have " + someCones +" I only have " + allCones +" left")
    }

    i++
}
while(allCones>0)
if(allCones === 0){
    console.log("Yay we sold all the cones and can go home now!")
}

