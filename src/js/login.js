import {
    $
}
from './interface/jquery.js';
$('.form-title>span').on('click', function () {
    $(this).css('color', '#333').siblings().css('color', '#bbb');
    let _index = $('.form-title>span').index($(this));
    if (_index == 0) {
        $('.lineae').animate({
            left: 0
        }, 200);
        $('.form-all').animate({
            left: 0
        }, 200);
    } else {
        $('.lineae').animate({
            left: 67
        }, 200);
        $('.form-all').animate({
            left: -450
        }, 200);
    }
});

let email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let iphoneNum = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
let msg = /^\d{5}$/
//登陆验证
$('.login-user').on({
    'click': function () {
        $('.login-user-title').animate({
            'top': '10px',
            'font-size': '12px'
        }, 100);
        $('.login-user-input').animate({
            'top': '25px'
        }, 100);
        $('.login-user-input').css({
            'background': '#fff'
        });
        $(this).css({
            'border': '1px solid #f04645',
            'border-radius': '5px',
            'background': '#fff'
        });
    }
})
$('.login-user-input').on({
    'blur': function () {
        if (!$(this).val()) {
            $('.login-user').css('background', '#FCF2F3');
            $(this).css('background', '#FCF2F3');
            $('.login-user-msg').html('请输入账号');
            $('.login-user-title').animate({
                'top': '20px',
                'font-size': '16px',
            }, 100);
            $('.login-user-title').css('color', '#f04645');
        } else if (!email.test($(this).val()) && !iphoneNum.test($(this).val())) {
            $('.login-user-msg').html('请输入正确的邮箱或手机号码');
            $('.login-user-title').css('color', '#f04645');
            $('.login-user-msg').css('color', '#f04645');
        } else {
            $('.login-user-msg').html('账号正确');
            $('.login-user-msg').css('color', 'green');
        }
        if ($('.login-psd-msg').html() == '密码正确' && $('.login-user-msg').html() == '账号正确') {
            $('.log-btn').prop('disabled', false);
        } else {
            $('.log-btn').prop('disabled', true);
        }
    }
});
$('.login-psd').on({
    'click': function () {
        $('.login-psd-title').animate({
            'top': '10px',
            'font-size': '12px'
        }, 100);
        $('.login-psd-input').animate({
            'top': '25px',
            'autofocus': "autofocus",
        }, 100);
        $('.login-psd-input').css('background', '#fff')
        $(this).css({
            'border': '1px solid #f04645',
            'border-radius': '5px',
            'background': '#fff'
        });
    }
});
$('.login-psd-input').on({
    'blur': function () {
        if (!$(this).val()) {
            $('.login-psd').css('background', '#FCF2F3');
            $(this).css('background', '#FCF2F3');
            $('.login-psd-msg').html('请输入密码');
            $('.login-psd-title').animate({
                'top': '20px',
                'font-size': '16px',
            }, 100);
            $('.login-psd-title').css('color', '#f04645');
        } else if (!/.{6,}/.test($(this).val())) {
            $('.login-psd-msg').html('密码长度至少六位');
            $('.login-psd-msg').css('color', '#f04645');
        } else if (!/[A-Z]{1,}/.test($(this).val())) {
            $('.login-psd-msg').html('密码至少要有一个大写');
            $('.login-psd-msg').css('color', '#f04645');
        } else if (!/[a-z]{1,}/.test($(this).val())) {
            $('.login-psd-msg').html('密码至少要有一个小写');
            $('.login-psd-msg').css('color', '#f04645');
        } else if (!/[!@#$%^&*? ]{1,}/.test($(this).val())) {
            $('.login-psd-msg').html('密码至少要有一个特殊符');
            $('.login-psd-msg').css('color', '#f04645');
        } else if (!/\d{1,}/.test($(this).val())) {
            $('.login-psd-msg').html('密码至少要有一个数字');
            $('.login-psd-msg').css('color', '#f04645');
        } else {
            $('.login-psd-msg').html('密码正确');
            $('.login-psd-msg').css('color', 'green');
        }
        if ($('.login-psd-msg').html() == '密码正确' && $('.login-user-msg').html() == '账号正确') {
            $('.log-btn').prop('disabled', false);
        } else {
            $('.log-btn').prop('disabled', true);
        }
    }
});

// 注册验证
$('.reg-user').on({
    'click': function () {
        $('.reg-user-title').animate({
            'top': '10px',
            'font-size': '12px'
        }, 100);
        $('.reg-user-input').animate({
            'top': '25px',
            'autofocus': "autofocus",
        }, 100);
        $('.reg-user-input').css('background', '#fff')
        $(this).css({
            'border': '1px solid #f04645',
            'border-radius': '5px',
            'background': '#fff'
        });
    }
});
$('.reg-user-input').on({
    'blur': function () {
        if (!$(this).val()) {
            $('.reg-user').css('background', '#FCF2F3');
            $(this).css('background', '#FCF2F3');
            $('.reg-user-msg').html('请输入账号');
            $('.reg-user-title').animate({
                'top': '20px',
                'font-size': '16px',
            }, 100);
            $('.reg-user-title').css('color', '#f04645');
        } else if (!email.test($(this).val()) && !iphoneNum.test($(this).val())) {
            $('.reg-user-msg').html('请输入正确的邮箱或手机号码');
            $('.reg-user-title').css('color', '#f04645');
            $('.reg-user-msg').css('color', '#f04645');
        } else {
            $('.reg-user-msg').html('账号可以注册');
            $('.reg-user-msg').css('color', 'green');
        }
        if ($('.reg-psd-msg').html() == '密码可以使用' && $('.login-user-msg').html() == '账号可以注册' && $('.reg-psd-code-msg').html() == '验证码正确') {
            $('.log-btn').prop('disabled', false);
        } else {
            $('.log-btn').prop('disabled', true);
        }
    }
});

$('.reg-psd ').on({
    'click': function () {
        $('.reg-psd-title').animate({
            'top': '10px',
            'font-size': '12px'
        }, 100);
        $('.reg-psd-input').animate({
            'top': '25px',
            'autofocus': "autofocus",
        }, 100);
        $('.reg-psd-input').css('background', '#fff')
        $(this).css({
            'border': '1px solid #f04645',
            'border-radius': '5px',
            'background': '#fff'
        });
    }
});
$('.reg-psd-input').on({
    'blur': function () {
        if (!$(this).val()) {
            $('.reg-psd').css('background', '#FCF2F3');
            $(this).css('background', '#FCF2F3');
            $('.reg-psd-msg').html('请输入密码');
            $('.reg-psd-title').animate({
                'top': '20px',
                'font-size': '16px',
            }, 100);
            $('.reg-psd-title').css('color', '#f04645');
        } else if (!/.{6,}/.test($(this).val())) {
            $('.reg-psd-msg').html('密码长度至少六位');
            $('.reg-psd-msg').css('color', '#f04645');
        } else if (!/[A-Z]{1,}/.test($(this).val())) {
            $('.reg-psd-msg').html('密码至少要有一个大写');
            $('.reg-psd-msg').css('color', '#f04645');
        } else if (!/[a-z]{1,}/.test($(this).val())) {
            $('.reg-psd-msg').html('密码至少要有一个小写');
            $('.reg-psd-msg').css('color', '#f04645');
        } else if (!/[!@#$%^&*? ]{1,}/.test($(this).val())) {
            $('.reg-psd-msg').html('密码至少要有一个特殊符');
            $('.reg-psd-msg').css('color', '#f04645');
        } else if (!/\d{1,}/.test($(this).val())) {
            $('.reg-psd-msg').html('密码至少要有一个数字');
            $('.reg-psd-msg').css('color', '#f04645');
        } else {
            $('.reg-psd-msg').html('密码可以使用');
            $('.reg-psd-msg').css('color', 'green');
        }
        if ($('.reg-psd-msg').html() == '密码可以使用' && $('.login-user-msg').html() == '账号可以注册' && $('.reg-psd-code-msg').html() == '验证码正确') {
            $('.log-btn').prop('disabled', false);
        } else {
            $('.log-btn').prop('disabled', true);
        }
    }
});

$('.reg-psd-code ').on({
    'click': function () {
        $('.reg-psd-code-title').animate({
            'top': '10px',
            'font-size': '12px'
        }, 100);
        $('.reg-psd-code-input').animate({
            'top': '25px',
            'autofocus': "autofocus",
        }, 100);
        $('.reg-psd-code-input').css('background', '#fff')
        $(this).css({
            'border': '1px solid #f04645',
            'border-radius': '5px',
            'background': '#fff'
        });
    }
});
$('.reg-psd-code-input').on({
    'blur': function () {
        if (!$(this).val()) {
            $('.reg-psd-code').css('background', '#FCF2F3');
            $(this).css('background', '#FCF2F3');
            $('.reg-psd-code-msg').html('请输入短信验证码');
            $('.reg-psd-code-title').animate({
                'top': '20px',
                'font-size': '16px',
            }, 100);
            $('.reg-psd-code-title').css('color', '#f04645');
        } else if (!msg.test($(this).val())) {
            $('.reg-psd-code-msg').html('验证码为五位数');
            $('.reg-psd-code-msg').css('color', '#f04645');
        } else {
            $('.reg-psd-code-msg').html('验证码正确');
            $('.reg-psd-code-msg').css('color', 'green');
        }
        if ($('.reg-psd-msg').html() == '密码可以使用' && $('.reg-user-msg').html() == '账号可以注册' && $('.reg-psd-code-msg').html() == '验证码正确') {
            $('.log-btn').prop('disabled', false);
        } else {
            $('.log-btn').prop('disabled', true);
        }
    }
});

// 扫码登陆
$('.mi-qr-login-switch').on('click', function () {
    $(this).siblings().toggleClass('display');
})