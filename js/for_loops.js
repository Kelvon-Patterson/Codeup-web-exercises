function showMultiplicationTable(num){

    for (var i = 1 ; i <= 10 ; i++ ){
console.log(num + " x " + i + " = " + (num * i));
    }
}
showMultiplicationTable(100)

// var random = Math.floor((Math.random() * 200) + 1);

for( var i = 1 ; i <=10 ; i++){
    var random = Math.floor((Math.random() * 200) + 20);
    if(random % 2 === 0){
        console.log(random + " is even")
    }else{
        console.log( random  + " is odd ")
    }
}

function generatePyramid() {
    var totalNumberofRows = 5;
    var output = '';
    for (var i = 1; i <= totalNumberofRows; i++) {
        for (var j = 1; j <= i; j++) {
            output += j + '  ';
        }
        console.log(output);
        output = '';
    }
}

generatePyramid();

