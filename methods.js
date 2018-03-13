var arr = [{
    img: 'book.png',
    text: 'Using books around you!',
    href: 'bookmethod.html'
}, {
    img: 'book.png',
    text: 'wowza',
    href: '#'
}, {
    img: '#',
    text: 'soon...',
    href: '#'
}];


function loadMethods() {
    var i = 0;
    $.each(arr, function(index, value) {
        var met = 'met' + i;
        var dev = 'dev' + i;
        $('<div />', {
            'class': 'method-container',
            'id': met
        }).appendTo('#irlmethods').click(function() {
            window.location.replace(value.href);
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
        }).hide().appendTo('#irlmethods').fadeIn('slow');

        i++;
    });
}