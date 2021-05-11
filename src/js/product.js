import {
    $
}
from './interface/jquery.js';
// 头部
import {
    header
} from './interface/header.js';
// 轮播图
import {
    slider
} from './interface/jquery-slider.js';
// 蒙版
import {
    mark
} from './interface/mark.js';
$('.product-container-left').slider({
    speed: 500,
    delay: 3000
});
$('.icon-close').on('click', function () {
    $('.need-login').remove();
});
// 图片加载
for (let i = 21; i >= 1; i--) {
    let div = `<div class="product-tabs img-${i}">
                        <img src="../img/img-produce/xq${i}.jpg" class="img-box img-height-${i}">
                        </div>`;
    $('.product-tabs-contanier').prepend(div);

}
for (let l = 6; l >= 1; l--) {
    let div = `<div class="product-tabs imgcs-${l}">
                        <img src="../img/img-produce/cs${l}.jpg" class="img-box imgcs-height-${l}">
                        </div>`;
    $('.product-tabs-parameter').prepend(div);

}
for (let m = 4; m >= 1; m--) {
    let div = `<div class="product-tabs imgpro-${m}">
                        <img src="../img/img-produce/prom${m}.jpg" class="img-box imgpro-height-${m}">
                        </div>`;
    $('.product-tabs-prom').prepend(div);
}
$(window).on('load', function () {
    for (let j = 1; j <= 21; j++) {
        let height = $(`.img-height-${j}`).height();
        $(`.img-${j}`).css('height', height + 'px');
    }
    for (let k = 1; k <= 6; k++) {
        let height = $(`.imgcs-height-${k}`).height();
        $(`.imgcs-${k}`).css('height', height + 'px');
    }
    for (let n = 1; n <= 4; n++) {
        let height = $(`.imgpro-height-${n}`).height();
        $(`.imgpro-${n}`).css('height', height + 'px');
    }
    $('.product-tabs-parameter').css('display', 'none');
    $('.product-tabs-prom').css('display', 'none');
});
$('.product-tabs-title>span').on('click', function () {
    $(this).css('color', '#ff4a00').siblings().css('color', '#757575');
    let _index = $('.product-tabs-title>span').index($(this));
    $('.product-tabs>div').not('.product-tabs-title').css('display', 'none').eq(_index).css('display', 'block');
});


$('.service-container').on('click', function () {
    $(this).children('.service-circle').toggleClass('active-bg-color');
    $(this).children('.service-container-title').children('h3').toggleClass('active-font-color');
    $(this).toggleClass('active-bd-color');
    $(this).children('.service-container-title').children('.agreement').children('.gou').toggleClass('active-bg-color');
});

$(window).on('scroll', function () {
    let top = $(document).scrollTop();
    if (top >= 210) {
        $('.top-fixed').slideDown(400);
    } else {
        $('.top-fixed').slideUp(200);
    }
})

setInterval(() => {
    let date = new Date();
    let hours = date.getHours() > 0 ? date.getHours() : '0' + date.getHours(),
        minutes = date.getMinutes() > 0 ? date.getMinutes() : '0' + date.getMinutes(),
        senconds = date.getSeconds() > 0 ? date.getSeconds() : '0' + date.getMinutes();
    $('.count-down').children('span').eq(1).html(hours);
    $('.count-down').children('span').eq(2).html(minutes);
    $('.count-down').children('span').eq(3).html(senconds);

}, 1000);