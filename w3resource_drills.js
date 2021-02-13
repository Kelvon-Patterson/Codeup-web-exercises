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

var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

var Avgmarks = 0;

for (var i=0; i < students.length; i++) {
    Avgmarks += students[i][1];
    var avg = (Avgmarks/students.length);
}

console.log("Average grade: " + (Avgmarks)/students.length);

if (avg < 60){
    console.log("Grade : F");
}
else if (avg < 70) {
    console.log("Grade : D");
}
else if (avg < 80)
{
    console.log("Grade : C");
} else if (avg < 90) {
    console.log("Grade : B");
} else if (avg < 100) {
    console.log("Grade : A");
}
