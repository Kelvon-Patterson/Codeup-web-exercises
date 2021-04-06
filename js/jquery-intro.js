$(document).ready(function () {
    console.log("fully loaded and ready to go!")
$('h1').click(function(e){
    $(e.target).css('background', 'black')
})

    $('p').dblclick(function (e){
        $(e.target).css('font-size', '18px')
    })
$('li').hover(function(e){
    $(e.target).css('background', 'red')
}, function(e){
    $(e.target).css('background', 'black')
    }
)
});