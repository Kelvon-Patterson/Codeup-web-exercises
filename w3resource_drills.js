function largerNum(num1, num2){
    if(num1 > num2){
        return num1
    }else if(num2 > num1){
        return num2
    }else{
        return NaN
    }
}
//
// function findSign(num1, num2, num3){
//     if(){
//
//     }
// }
// dont forget to include zero
for (var i = 1; i <=15 ; i++ ){
    if(i % 2 ===0){
        console.log(i + " is even")
    }else if(i === 0){
        console.log(i + " is even")
    } else {
        console.log(i + " is odd")
    }
}
var membersOfMyFamily = ['Kelvon' , 'Amirah', 'Rambo', 'Loki']
for ( var i = 0; i < membersOfMyFamily.length; i++){
console.log("The members of my family are " + membersOfMyFamily[i])
}

///While loop

var i = 0

while(i < 10){
    console.log("while loop iteration " +i);
    i++;
}

var i = 10

do{
    console.log("while loop iteration" + i );
    i++;
} while(i<10)

//Exercise
var i = 1;

while (i <65536){

    console.log(i)
i+=i
}

//For loop--- Most commonly used loops

//for (//initialize (var i = 1); condition(i < 10); increment(i++)){};

for ( var i = 0; i < 10; i++){
    console.log('for loop iteration' + i)

}

//convert to while
var i = 0
while(i < 10){
    console.log('for loop iteration');
    i++;
}

//Exercise

for ( var i = 100;i >= 5 ; i-=5 ){

console.log(i)
}

//Break and Continue
     var i = 0
while (i<10){
    console.log(i);
    if(i==5){
        break;
    }
    i++
}

var i = 0;

while(i<10){
    if(i==5){
        i++;
        continue;
    }
    console.log(i);
    i++
}



//Create function that take a number 'n' and returns the first 10 multiples of 'n' with 1 added to it, seperate by commmas

