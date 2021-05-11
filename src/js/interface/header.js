import {
    $
} from './jquery.js';
// 函数节流
let header = (function () {
    function thottle(callback, delay) {
        let prev = 0; // 用于记录上次的执行时间

        return function () {
            let now = Date.now(); // 获得当前时间

            if (now - prev >= delay) {
                callback.apply(this, arguments); // 调用回调函数
                prev = now; // 更新上一次的执行时间
            }
        }
    }
    $('.shop-car').hover(
        thottle(function () {
            $('.shop-muen').slideDown(400);
        }, 1000),
        thottle(function () {
            $('.shop-muen').slideUp(400);
        }, 1000));
    $('.header-nav>nav>div').hover(function () {
        $('.header-list').css({
            'height': '229px',
            'border-width': '1px'
        });
    }, function () {
        $('.header-list').css({
            'height': '0px',
            'border-width': '0px'
        });
    });
    $('.header-list').hover(function () {
        $(this).css({
            'height': '229px',
            'border-width': '1px'
        });
    }, function () {
        $(this).css({
            'height': '0px',
            'border-width': '0px'
        });
    });

    $('.header-nav>nav>div>li').on('mouseover', function () {
        let _index = $('.header-nav>nav>div>li').index($(this));
        $('.header-container').css('display', 'none').eq(_index).css('display', 'block')
    });
    $('.search').hover(function () {
        $('.search-input').css('borderColor', '#b0b0b0');
        $('.search-btn').css('borderColor', '#b0b0b0');
    }, function () {
        $('.search-input').css('borderColor', '#e0e0e0');
        $('.search-btn').css('borderColor', '#e0e0e0');
    });
    $('.search-input').on({
        'focus': function () {
            $('.search-list').css('display', 'block');
            $(this).css('border-color', '#ff6700');
            $('.search-btn').css('border-color', '#ff6700');
        },
        'blur': function () {
            $('.search-list').css('display', 'none');
            $(this).css('border-color', '#e0e0e0');
            $('.search-btn').css('border-color', '#e0e0e0');
        }
    });
    $('.carouse-list').children().hover(
        function () {
            let _index = $('.carouse-list').children().index($(this));
            $('.carouse-block').css('display', 'none').eq(_index).css('display', 'block');

        },
        function () {
            $('.carouse-block').css('display', 'none');
        }
    );
})();

export {
    header
}