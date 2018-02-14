$(document).ready(function(){
    particlesJS.load('particles-js', 'particles.json',
        function () {
            console.log('particles.json loaded...')
        })

    var clickSound = document.createElement('audio');
    clickSound.setAttribute('src', 'click.mp3');
    clickSound.volume = 0.4;

    document.getElementById("particles-js").addEventListener("onload", changeColor());

    $(".button").click(function() {
        clickSound.play();
    });

    $("#leftb").click(function() {
        $('html,body').animate({
            scrollTop: $("#blurry").offset().top},'slow');
    });

    $("#rightb").click(function() {
        alert("Come back when you're ready");
    });

    $(".landing > h1, .landing > p, .landing > div").hide();
    $(".landing > h1").fadeIn(1500, function() {
        $(".landing > p, .landing > div").fadeIn(1500);
    });

    $("#leftb, #rightb").mouseenter(function() {
        $(this).animate({
            fontSize: "2.0em"
        });
    });

    $("#leftb, #rightb").mouseleave(function() {
        $(this).animate({
            fontSize: "1.7em"
        });
    });

    $("#left").mouseenter(function() {
        $("#left h1").animate({
            fontSize: "70px",
        }, 'slow');
    });

    $("#left").mouseleave(function() {
        $("#left h1").animate({
            fontSize: "60px"
        }, 'slow');
    });
});

function changeColor() {
    var elem = document.getElementById("particles-js");
    var red1 = 65, red2 = 50;
    var green1 = 105, green2 = 205;
    var blue1 = 225, blue2 = 50;
    elem.style.background = "linear-gradient(to right, rgb(" + red1 + ", " + green1 + ", " + blue1 + "), rgb(" + red2 + ", " + green2 + ", " + blue2 + "))";
}