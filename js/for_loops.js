function showMultiplicationTable(num){

    for (var i = 1 ; i <= 10 ; i++ ){
console.log(num + " x " + i + " = " + (num * i));
    }
}
showMultiplicationTable(7)

// var random = Math.floor((Math.random() * 200) + 1);

for( var i = 1 ; i <=10 ; i++){
    var random = Math.floor((Math.random() * 200) + 20);
    if(random % 2 === 0){
        console.log(random + " is even")
    }else{
        console.log( random  + " is odd ")
    }
}
//Refactor into a function
function leftPyramid(num) {
    for (var i = 1; i <= num; i++) {
        var output = '';
        for (var j = 1; j <= i; j++) {
            output += i.toString()
        }
        console.log(output)
    }
}
leftPyramid(10)

for ( var i = 100; i >=5; i -= 5 ){
    console.log(i)
}




