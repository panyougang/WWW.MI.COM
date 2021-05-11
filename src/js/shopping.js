import {
    $
}
from './interface/jquery.js';
import {
    header
} from './interface/header.js';
$(window).on('scroll', function () {
    let top = $(document).scrollTop();
    if (top < 500) {
        $('.scroll-bottom').css({
            'position': 'fixed',
            'height': 50,
        })
    } else {
        $('.scroll-bottom').css({
            'position': 'static',
            'height': 0,
        });
    }
})

$('.square-select').on('click', function () {
    $('.square-select').toggleClass('square-color');


})
let count = 1
$('.count-change>.icon-jianhao').on('click', function () {
    count--;
    $('.count').html(count);
});
$('.count-change>.icon-jiahao').on('click', function () {
    count++;
    $('.count').html(count);
});

$('.icon-close').on('click', function () {
    $('.settle-product').remove();
    $('.accounts').remove();
});

$('.add-car-2').on('click', function () {
    location.href = '../html/shopping-succeed.html';
});