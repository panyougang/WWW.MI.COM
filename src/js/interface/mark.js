import {
    $
} from './jquery.js'

let mark = (function () {
    $('.icon-close').on('click', function () {
        $('.masking').animate({
            top: '-10px',
        }, 400, function () {
            $('.masking').fadeOut(400, function () {
                $('.masking').css('top', 0)
            });
        });
    });
    $('.disagree').on('click', function () {
        $('.masking').animate({
            top: '-10px',
        }, 400, function () {
            $('.masking').fadeOut(200, function () {
                $('.masking').css('top', 0)
            });
        });
    });
    $('.reg-btn').on('click', function () {
        $('.masking').fadeIn(400)
    })

    $('.agree').on('click', function () {
        location.href = 'http://localhost/WWW.MI.COM/src/html/reg.html'
    });
})();

export {
    mark
};