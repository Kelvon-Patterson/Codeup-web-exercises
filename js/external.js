(function () {
    "use strict"
    console.log("Hello from External Javascript");
    alert("Welcome to my website");


    let userFavoritecolor = prompt("What is your favorite color?");
    alert(userFavoritecolor + "is my favorite color too!");
//
    let lM = 3;
    let bB = 5;
    let h = 1;

    var pPD = prompt("How much does the rental cost per day");
    pPD = parseInt(pPD);
    let totalCost = (lM * pPD) + (bB * pPD) + (h * pPD)
    alert("The total cost of the movies is " + totalCost + " dollars");
//
    let googlePay = 400
    let amazonPay = 380
    let facebookPay = 350

    var googleHPD = prompt("How many hours did you work at Google this week")
    var amazonHPD = prompt("How many hours did you work at Amazon this week")
    var facebookHPD = prompt("How many hours did you work at Facebook this week")

    var totalWeeksPay = (googlePay * googleHPD) + (amazonPay * amazonHPD) + (facebookPay * facebookHPD)

    alert("Your total pay this week was " + totalWeeksPay)

//
    var classroomisFull = confirm("Is there space in this classroom?")
    var wontConflictsWithSchedule = confirm("Will you have space for this class in your schedule ?")

    alert("You can join the class is a " + (wontConflictsWithSchedule && classroomisFull) + " statement ")
//
    var hasMoreThanTwoItems = confirm("Do you have two or more items?")

    var hasOfferStillValid = confirm("Is the offer still valid?")

    var areYouPreimMem = confirm("Are you a premium member?")

    var canUserUseOffer = (hasMoreThanTwoItems || areYouPreimMem) && hasOfferStillValid

    alert("It is " + canUserUseOffer + " that you are eligible for this offer!")
})();







