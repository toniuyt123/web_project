var irlArr = [{
    img: './images/book.png',
    text: 'Using books around you!',
    href: 'bookmethod.html'
}, {
    img: './images/book.png',
    text: 'wowza',
    href: '#'
}, {
    img: '#',
    text: 'soon...',
    href: '#'
}];

var gameArr = [{
    img: './images/book.png',
    text: 'Picking words!',
    href: 'wordgame.html'
}, {
    img: './images/book.png',
    text: 'another one',
    href: '#'
}, {
    img: './images/book.png',
    text: 'soon...',
    href: '#'
}];


function loadMethods(selection) {
    var arr;
    if(selection == 1) {
        arr = irlArr
    } else if(selection == 2) {
        arr = gameArr
    }
    var i = 0;
    $.each(arr, function(index, value) {
        var met = 'met' + i;
        var dev = 'dev' + i;
        $('<div />', {
            'class': 'method-container',
            'id': met
        }).appendTo('#methods').click(function() {
            window.location = value.href;
        });

        $('<img />', {
            'class': 'methodimg',
            'src': value.img,
        }).hide().appendTo('#' + met.toString()).fadeIn('slow');

        $('<div />', {
            'text': value.text,
            'class': 'method'
        }).hide().appendTo('#' + met.toString()).fadeIn('slow');

        $('<div />', {
            'class': 'horizontal-devider',
            'id': dev
        }).hide().appendTo('#methods').fadeIn('slow');

        i++;
    });
}