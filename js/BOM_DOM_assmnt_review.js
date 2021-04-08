//TODO: Let's make a button- when the buttom is clicked the box should double in size from what it was

$('#changeBoxSize').click(function(e){
//stuff to have happen when click happens- on the id of changeBoxSize
    $('#box').css('height', '500px');

    $('#box').css('width', '500px');
})

//TODO:Let's make a class - when the toggle class button- when the toggle class button is clicked, the boc will change color to the class's background -color

var instructions = function (e){
    if($("#box").hasClass("toggleClass1")){
        $("#box").toggleClass("toggleClass2")
    } else {
        $("#box").toggleClass("toggleClass1")
    }
}

$("#toggleClass").click(instructions)
//TODO: can we set up an area of HTML - in that area of HTML, when the BOX is hovered over you would see the height and width of the BOX