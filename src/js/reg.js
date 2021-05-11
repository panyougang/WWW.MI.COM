import {
    $
} from './interface/jquery.js';

$('.city').on('click', function () {
    $('.city-list').toggleClass('display')
})
$('.phone').on('click', function () {
    $('.phone-city-list').toggleClass('display')
})
let reg = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
$('.phoneInput').on({
    'blur': function () {
        if (!$(this).val()) {
            $('.phoneName').css('border-color', '#f66');
            $('.msg').html(`<i><span>请输入手机号码</span></i>`);
        } else if (!reg.test($(this).val())) {
            $('.phoneName').css('border-color', '#f66');
            $('.msg').html(`<i><span>手机号码格式错误</span></i>`);
        } else {
            $('.phoneName').css('border-color', '#e8e8e8');
            $('.msg').html(`手机号码可以注册`);
        }
        if ($('.msg').html() === '手机号码可以注册') {
            $('.right-reg').removeAttr('disabled');
        }
    },
    'input': function () {
        $('.phoneName').css('border-color', '#e8e8e8');
        $('.msg').html(``);
    }
});