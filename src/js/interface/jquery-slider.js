import {
    $
} from './jquery.js'
let slider = $.fn.extend({
    slider: function (options) {
        let defaults = {
            speed: 500,
            delay: 3000
        };


        $.extend(defaults, options);


        let main = null,
            init = null,
            start = null,
            stop = null,
            next = null,
            prev = null,
            timer = null,
            elms = {};

        init = function () {
            //获取包裹图片的div元素
            elms.sliderElm = this.children('div');
            //获取两个按钮
            elms.btns = this.children('span');
            //获取圆圈按钮
            elms.circle = this.children('ul');

            //复制第一张图片
            elms.sliderElm.append(elms.sliderElm.children().first().clone())
            //获得图片的宽度
            elms.imgWidth = elms.sliderElm.children().first().width();
            //设置索引
            elms.index = 1;
            //悬停事件
            this.hover(function () {
                stop();
            }, function () {
                timer = setInterval(start.bind(null, 1), defaults.delay + defaults.speed);
            });

            //按钮点击事件
            elms.btns.on('click', function () {
                if (elms.btns.index(this)) {
                    next();
                } else {
                    prev();
                }
            });
            //圆圈点击事件
            elms.circle.children().on('click', function () {
                let _index = elms.circle.children().index(this)
                elms.circle.children().removeClass('bgcl').eq(_index).addClass('bgcl')
                elms.sliderElm.animate({
                    left: -_index * elms.imgWidth
                }, defaults.speed);
            })
        }.bind(this); //让this指向$的实例对象

        start = function (direction) {
            //默认往右移动，那么包裹图片的div元素往左移动，left值要--；
            let left = `-=${elms.imgWidth}`;
            //如果往左移动
            if (!direction) {
                //left值要--
                left = `+=${elms.imgWidth}`
                if (elms.index === 1) {
                    elms.index = 6;
                    //获取包裹图片的div元素距离页面左边的距离
                    let divLeft = this.offset().left,
                        //获取最后一张图片距离页面左边的距离
                        imgLeft = elms.sliderElm.children('img').last().offset().left;
                    elms.sliderElm.css('left', `-${imgLeft - divLeft}px`);
                }
            }
            //给包裹图片的div元素添加动画
            elms.sliderElm.animate({
                left: left,
            }, defaults.speed, function () {
                //如果往右移动
                if (direction) {
                    //索引++
                    elms.index++;
                } else {
                    //如果往右移动
                    //索引--
                    elms.index--;
                }
                //如果索引到4了，让索引变为1，让包裹图片的div元素回到起点
                if (elms.index === 6) {
                    elms.index = 1;
                    elms.sliderElm.css('left', 0)
                }
            });
            //圆圈添加样式
            if (direction) {
                elms.circle.children().eq(elms.index == 5 ? elms.index - 5 : elms.index).addClass('bgcl').siblings().removeClass('bgcl')
            } else {
                elms.circle.children().eq(elms.index - 2).addClass('bgcl').siblings().removeClass('bgcl');
            }
        }.bind(this);
        next = function () {
            stop();
            start(1)
        }
        prev = function () {
            stop();
            start(0)
        }
        stop = function () {
            clearInterval(timer);
            elms.sliderElm.stop(true, true);
        }
        main = function () {
            init();
            timer = setInterval(start.bind(null, 1), defaults.delay + defaults.speed);
        }
        main();
    }
});

export {
    slider
}