var textField = "";

$(document).ready(function () {
    $('.keys').children("span").on('click', function(){
        var keypress = $(this).text();
        if (keypress == 'C'){
            textField = "";
        }
        if (keypress == '='){
            textField = eval(textField);
        } else { textField = textField + keypress; }
        $('.textField').text(textField);
    });
    $('.clear').on('click', function(){
        textField = "";
        $('.textField').text(textField);
    })
});