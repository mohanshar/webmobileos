// window.onbeforeunload = function () {
//     return 'Reload';
// }


$(document).ready(function () {
    
    $('.openlock').on("click", function () {
        $('.openlock').slideUp(1500);
        $('.time').fadeOut(1000);
        $('#lock').slideDown(1000);
    });

    $('.drag-notification').click(function () {
        $('.notification').slideToggle(800);
    });

    $('#all_apps').click(function () {
        $('.apps').fadeToggle();
    });



    

    // $('.ok').on("click", function () {
    //     $('.del').hide();
    // });

});


$(document).on('click', '.ok', function () {
    var answer = $("#passcodeInput").val();
    if (answer == 2222) {
        $('.home').fadeIn(1500);
        $('#lock').fadeOut(1500);
        // $('#lock').slideUp(function () {
        //     alert('Welcome to the brand new WebOS Mobile Operating System.');
        // });
    }
    else if (answer.length === 0) {
        alert('please! put your passcode');
        window.navigator.vibrate(200);
    }
    else {
        alert('wrong passcode, try again!');
        window.navigator.vibrate(200);
    }
});
