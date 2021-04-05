$(document).ready(function () {
    console.log("fully loaded and ready to go!")


    // Element selectors examples below vvv
    $('p').css({'font-size':'30px', 'backgroundColor':'purple', 'color' : 'fuchsia'});
    $('li').css({'font-size':'70px', 'color':'rebeccapurple'});
    $('h1').css('color', 'blue');
    $('div').css({'background-color':'lavender', 'font-size':'50px', 'color':'red'});
    $('body').css('background-color', 'lightgrey');
    $('div').html('New text inside of my div tag, courtesy of jquery!')
    $('p').html('This is a brand new text in my p tag, cus jquery replaced it!')

    // all selector example below
    $('*').css({'font-style':'italic', 'font-family':'sans-serif'});

    // this ones neat, courtesy of Victor
    // $("*").click(function(){
    //     $('*').hide()
    // })
    // $('*').dblclick(function(){
    //     $('*').show()
    // })
});