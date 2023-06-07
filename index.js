// window.onbeforeunload = function () {
//     return 'Reload';
// }


$(document).ready(function () {

    $('.openlock').on("click", function () {
        $('.openlock').slideUp();
        $('#lock').slideDown();
    });

    $('.ok').on("click", function () {
        $('.del').hide();
    });

});


$(document).on('click', '.ok', function () {
    var answer = $("#textBox").val();
    if (answer == 2513) {
        $('.home').slideDown();
        $('#lock').slideUp(function () {
            // alert('Welcome to the brand new WebOS Mobile Operating System.');
        });

    }
    else if (answer.length === 0) {
        alert('please put your passcode');
        window.navigator.vibrate(200);
    }
    else {
        alert('wrong');
        window.navigator.vibrate(200);
    }
});

