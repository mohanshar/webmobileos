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


$(document).ready(function () {

    $('div.one p').click(function () {
        $('div.one p').slideUp(500);
        $('div.one div#one').slideDown(500);
        $('div.two p').slideDown(500);
        $('div.two div#two').slideUp(500);
        $('div.three p').slideDown(500);
        $('div.three div#three').slideUp(500);
        $('div.four p').slideDown(500);
        $('div.four div#four').slideUp(500);
        $('div.five p').slideDown(500);
        $('div.five div#five').slideUp(500);
    })
    $('div.one div#one').click(function () {
        $('div.one p').slideDown(500);
        $('div.one div#one').slideUp(500);
    })

    $('div.two p').click(function () {
        $('div.two p').slideUp(500);
        $('div.two div#two').slideDown(500);
        $('div.one p').slideDown(500);
        $('div.one div#one').slideUp(500);
        $('div.three p').slideDown(500);
        $('div.three div#three').slideUp(500);
        $('div.four p').slideDown(500);
        $('div.four div#four').slideUp(500);
        $('div.five p').slideDown(500);
        $('div.five div#five').slideUp(500);
    })
    $('div.two div#two').click(function () {
        $('div.two p').slideDown(500);
        $('div.two div#two').slideUp(500);
    })


    $('div.three p').click(function () {
        $('div.three p').slideUp(500);
        $('div.three div#three').slideDown(500);
        $('div.one p').slideDown(500);
        $('div.one div#one').slideUp(500);
        $('div.two p').slideDown(500);
        $('div.two div#two').slideUp(500);
        $('div.four p').slideDown(500);
        $('div.four div#four').slideUp(500);
        $('div.five p').slideDown(500);
        $('div.five div#five').slideUp(500);
    })
    $('div.three div#three').click(function () {
        $('div.three p').slideDown(500);
        $('div.three div#three').slideUp(500);
    })


    $('div.four p').click(function () {
        $('div.four p').slideUp(500);
        $('div.four div#four').slideDown(500);
        $('div.one p').slideDown(500);
        $('div.one div#one').slideUp(500);
        $('div.two p').slideDown(500);
        $('div.two div#two').slideUp(500);
        $('div.three p').slideDown(500);
        $('div.three div#three').slideUp(500);
        $('div.five p').slideDown(500);
        $('div.five div#five').slideUp(500);
    })
    $('div.four div#four').click(function () {
        $('div.four p').slideDown(500);
        $('div.four div#four').slideUp(500);
    })


    $('div.five p').click(function () {
        $('div.five p').slideUp(500);
        $('div.five div#five').slideDown(500);
        $('div.one p').slideDown(500);
        $('div.one div#one').slideUp(500);
        $('div.two p').slideDown(500);
        $('div.two div#two').slideUp(500);
        $('div.three p').slideDown(500);
        $('div.three div#three').slideUp(500);
        $('div.four p').slideDown(500);
        $('div.four div#four').slideUp(500);
    })
    $('div.five div#five').click(function () {
        $('div.five p').slideDown(500);
        $('div.five div#five').slideUp(500);
    })
})

$(document).ready(function () {

    $('#btn1').click(function () {
        $('#btn1').slideUp()
        $('.rslt1').slideDown()
        $('.btn2').show()
        $('#btn2').hide()
    })

    $('.btn2').click(function () {
        $('.btn2').slideUp()
        $('.rslt2').slideDown()
        $('.btn3').show()
        $('#btn3').hide()
    })

    $('.btn3').click(function () {
        $('.btn3').slideUp()
        $('.rslt3').slideDown()
        $('.wlc').slideDown(2000)
    })

})

