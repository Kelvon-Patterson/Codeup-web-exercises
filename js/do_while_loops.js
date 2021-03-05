var allCones = Math.floor(Math.random() * 50) + 50;
console.log( " You have " + allCones + " cones! ")


    do {
   var conesSold =  Math.floor(Math.random() * 5) + 1;
    console.log("You sold " + conesSold + " cones ")
        allCones--;
}
while(conesSold < allCones)

if(conesSold === allCones) {
    console.log("Yay you can go home now!")
}else{
    console.log("You haven't sold all your cones yet!!")
}

