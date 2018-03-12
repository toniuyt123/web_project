var arrayVariable = ['one', 'two', 'three'];


function loadMethods() {
    $.each(arrayVariable, function(index, value) {
        $('<div />', {
          'text': value
        }).appendTo('#blurry');
    });
}