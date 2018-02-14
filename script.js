/*document.getElementById("asdf").addEventListener("onmouseover", changeSize(1.5, 2.0, 0.1)).addEventListener("onmouseout", changeSize(2.0, 1.5, -0.1));

function changeSize(begin, end, step) {
    var elem = document.getElementById("asdf");
    var inc = begin;
    var id = setInterval(frame, 10);
    function frame() {
        if (inc >= end) {
            clearInterval(id);
        } else {
            inc += step;
            elem.style.fontSize = inc + "em"; 
        }
    }
}*/
$(document).ready(function(){
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'click.mp3');

    $("#leftb").click(function() {
        $('html,body').animate({
            scrollTop: $("#blurry").offset().top},'slow');
        audioElement.play();
    });

    /*$(".landing > h1, .landing > p, .landing > div").hide();
    $(".landing > h1").fadeIn(1500, function() {
        $(".landing > p, .landing > div").fadeIn(1500);
    });*/
    document.getElementById("particles-js").addEventListener("onload", changeColor());

});
var buttons = document.getElementsByClassName("button");

//buttons[0].addEventListener("mouseover", function() {changeSize(1.5, 2.0, 0.1, 0);});
//buttons[0].addEventListener("mouseout", function() {changeSize(2.0, 1.5, 0.1, 0);});


function changeColor() {
    var elem = document.getElementById("particles-js");
    var red1 = 65, red2 = 50, rcount;
    var green1 = 105, green2 = 205, gcount;
    var blue1 = 225, blue2 = 50, bcount;
    elem.style.background = "linear-gradient(to right, rgb(" + red1 + ", " + green1 + ", " + blue1 + "), rgb(" + red2 + ", " + green2 + ", " + blue2 + "))";
}
/*function changeSize(begin, end, step, i) {
    var buttons = document.getElementsByClassName("button");
    var elem = buttons[i];
    var inc = begin;
    var id = setInterval(frame, 30);
    function frame() {
        if (inc >= end) {
            clearInterval(id);
        } else {
            inc += step;
            elem.style.fontSize = inc + "em"; 
        }
    }
}*/