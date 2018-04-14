$(document).ready(function(){
    particlesJS.load('particles-js', 'particles.json',
        function () {
            console.log('particles.json loaded...')
        })

    particlesJS.load('blurry', 'particles.json',
        function () {
            console.log('particles.json loaded...')
        })

    var clickSound = document.createElement('audio');
    clickSound.setAttribute('src', './audio/click.mp3');
    clickSound.volume = 0.4;


    $(".button, .option, .method-container").click(function() {
        clickSound.play();
    });

    $("#leftb, #rightb, #left h1, #right h1, #irlmethods, .circle, #methods").mouseenter(function() {
        $(this).css('cursor','pointer');
    });

    $("#leftb").click(function() {
        $('html,body').animate({
            scrollTop: $("#blurry").offset().top},'slow');
    });

    $("#rightb").click(function() {
        alert("Come back when you're ready");
    });

    $(".landing > h1, .landing > p, .landing > div").hide();
    $(".landing > h1").fadeIn(2000, function() {
        $(".landing > p, .landing > div").fadeIn(1500);
    });

    $("#leftb, #rightb").mouseenter(function() {
        $(this).animate({
            fontSize: "2.0em" });
        $(this).css('cursor','pointer');
    });

    $("#leftb, #rightb").mouseleave(function() {
        $(this).animate({
            fontSize: "1.7em" });
    });

    $("#left h1, #right h1").mouseenter(function() {
        $(this).animate({
            fontSize: "70px" });
    });

    $("#left h1, #right h1").mouseleave(function() {
        $(this).animate({
            fontSize: "60px" });
    });

    $("#left").click(function() {
        $(".option, .vertical-devider, #clear").fadeOut(400, function() { 
            $(this).remove(); 
        });

        loadMethods(1);
    });

    $("#right").click(function() {
        $(".option, .vertical-devider, #clear").fadeOut(400, function() { 
            $(this).remove(); 
        });

        loadMethods(2);
    });

    $("#info").click(function() {
        $("#info").css({                   //animating borderRadius is dumb and this was
            borderTopLeftRadius: "50%",     // the only solution to work on all browsers
            borderTopRightRadius: "50%",     // i could find
            borderBottomLeftRadius: "50%", 
            borderBottomRightRadius: "50%",
            WebkitBorderTopLeftRadius:"50%", 
            WebkitBorderTopRightRadius: "50%", 
            WebkitBorderBottomLeftRadius: "50%", 
            WebkitBorderBottomRightRadius: "50%", 
            MozBorderRadius: "50%" 
        }).animate({
            borderTopLeftRadius: "5px", 
            borderTopRightRadius: "5px", 
            borderBottomLeftRadius: "5px", 
            borderBottomRightRadius: "5px",
            WebkitBorderTopLeftRadius: "5px", 
            WebkitBorderTopRightRadius: "5px", 
            WebkitBorderBottomLeftRadius: "5px", 
            WebkitBorderBottomRightRadius: "5px", 
            MozBorderRadius: "5px",
            width: "30%",
            height: "20%",
            fontSize: "1.3em"
        }, function() {
            $("#info").html("Are so uncreative that you can't think of a name for you team/project/nickname or whatever. Well this site is just for you. With it you can generate a nice name with our games of use some super cool real life methods for picking a random name");
        });
    });

    $("#info").mouseleave(function() {
        $("#info").css({ 
            borderTopLeftRadius: "5px", 
            borderTopRightRadius: "5px", 
            borderBottomLeftRadius: "5px", 
            borderBottomRightRadius: "5px",
            WebkitBorderTopLeftRadius: "5px", 
            WebkitBorderTopRightRadius: "5px", 
            WebkitBorderBottomLeftRadius: "5px", 
            WebkitBorderBottomRightRadius: "5px",
            MozBorderRadius: "5px" 
        }).animate({
            borderTopLeftRadius: "50%", 
            borderTopRightRadius: "50%", 
            borderBottomLeftRadius: "50%", 
            borderBottomRightRadius: "50%",
            WebkitBorderTopLeftRadius:"50%", 
            WebkitBorderTopRightRadius: "50%", 
            WebkitBorderBottomLeftRadius: "50%", 
            WebkitBorderBottomRightRadius: "50%",  
            MozBorderRadius: "50%",
            width: "20px",
            height: "20px" ,
            fontSize: "1.5em"
        }, function() {
            $("#info").html("?");
        });
    });

    $(".circle").click(function() {
        window.location = "index.html";
    });
});