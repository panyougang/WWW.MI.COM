import {
    $
} from './interface/jquery.js';
// 轮播图
import {
    slider
} from './interface/jquery-slider.js';
// 头部js
import {
    header
} from './interface/header.js';

// 蒙版
import {
    mark
} from './interface/mark.js';
$('.appliances-title>div>span').on({
    'mouseover': function () {
        $(this).css({
            'color': '#ff6700',
            'border-bottom': '2px solid #ff6700'
        }).siblings().css({
            'border-bottom': '2px solid transparent',
            'color': '#434343'
        });
        let _index = $('.appliances-title>div>span').index($(this));
        $('.appliances-warp').children().css('display', 'none').eq(_index).css('display', 'block')
    }
})

setInterval(() => {
    let date = new Date();
    let hours = date.getHours() > 0 ? date.getHours() : '0' + date.getHours(),
        minutes = date.getMinutes() > 0 ? date.getMinutes() : '0' + date.getMinutes(),
        senconds = date.getSeconds() > 0 ? date.getSeconds() : '0' + date.getMinutes();
    $('.count-down').children('span').eq(0).html(hours);
    $('.count-down').children('span').eq(1).html(minutes);
    $('.count-down').children('span').eq(2).html(senconds);

}, 1000);
$('.carouse-right').slider({
    speed: 500,
    delay: 3000
});