var arrayVariable = ['one', 'two', 'three'];


function loadMethods() {
    var i = 0;
    $.each(arrayVariable, function(index, value) {
        var met = 'met' + i;
        var dev = 'dev' + i;
        $('<div />', {
        'text': value,
        'class': 'method',
        'id': met
        }).hide().appendTo('#irlmethods').fadeIn('slow');

        $('<div />', {
            'class': 'horizontal-devider',
            'id': dev
        }).hide().appendTo('#irlmethods').fadeIn('slow');
    });
}