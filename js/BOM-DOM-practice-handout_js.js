//TODO: When the #changeBoxSize button is clicked the box should double in size from what it was!

var changeSizeBtn= document.getElementById('changeBoxSize');

changeSizeBtn.addEventListener('click', function (e){
    var targetBox = document.getElementById('box')

    targetBox.style.height= "500px";
    targetBox.style.width = "500px";
})


//TODO: I have two CSS classes - toggleClass1 and toggleClass2 - that are currently unused. When the #toggleClass button is clicked, program a bit of JavaScript to toggle between those classes to see the background-color switch back and forth with each click. Bonus: Write your callback function in a variable and use it instead!
var toggleClass1 = document.getElementsByClassName('toggleClass1')
var toggleClass2 = document.getElementsByClassName('toggleClass2')
var toggleClassBtn = document.getElementById('toggleClass')

toggleClassBtn.addEventListener("click", function (e){
    var targetBox = document.getElementById('box')
    targetBox.setAttribute('class', 'toggleClass1')

    if(targetBox.getAttribute('class')==='toggleClass1'){
    targetBox.setAttribute('class', 'toggleClass2')
}



})


//TODO: In the #boxInfo element, when the BOX is hovered over the HEIGHT and WIDTH of the box would appear in that HTML area [div]

var displayBoxInfo= document.getElementById('boxInfo')
var theBox = document.getElementById('box')

displayBoxInfo.innerText = document.getElementById('box').style.width + " " + document.getElementById('box').style.height;

theBox.addEventListener('mouseenter', function(){
    displayBoxInfo.innerText= "You have entered the box";
})

theBox.addEventListener('mouseleave',function (){
    displayBoxInfo.innerText= "You're leaving the box";
})


//TODO: When the user types in to our #input and then clicks #inputBtn, what they typed into the box should replace what was inside of the span #userName with the input's contents




//TODO: Refactor the above work - after 5 seconds have passed from the user clicking #inputBtn and seeing #userName change, change the entire div of #helloUser to say "Let me know if you want to play a game. ."






