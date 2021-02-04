(function () {
    "use strict";

    console.log("Hello from an external JS file");

    var name = "Kelvon";
    console.log("Hello, + name");

//Alert
    alert("Welcome to my site!");

//Confirm
    var confirmLeave = confirm("Are you sure you want to leave? 0.0")
    console.log("confirmLeave" + confirmLeave)
//Prompt
    var favoriteColor = prompt("Your favorite color is")
    console.log("Your favorite color is" + prompt)
})();