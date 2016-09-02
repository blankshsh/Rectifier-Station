$(document).ready(function() {
    //     var hover = {
    //         init: function(argument) {
    //             var me = this;
    //             me.render();
    //             me.bind();
    //         },
    //         render: function() {
    //             var me = this;
    //             me.more = $('.more');
    //             me.somemore = $('#somemore');
    //             me.bginner = $('.wrp-bgchanges-inner');
    //             me.bgchange = $('.wrp-bgchanges');
    //             me.shownav = $("#shownav");
    //             me.showicon = $('.goheader-icon');
    //             me.gotop = $('.gomyheader');

    //         },
    //         bind: function() {
    //             var me = this;
    //             me.more.on('mouseenter', function() {
    //                 $("#somemore").show();
    //             });
    //             me.somemore.on('mouseleave', function() {
    //                 $("#somemore").hide(); //更多产品 鼠标走 隐藏
    //             });
    //             me.bginner.on('mouseenter', function() {
    //                 $("#wrp-bgchanges-show").show();
    //             });
    //             me.bgchange.on('mouseleave', function() {
    //                 $("#wrp-bgchanges-show").hide(); //更多产品 鼠标走 隐藏
    //             });
    //             me.shownav.on('click', function() {
    //                 $('.mynav-more').slideToggle();
    //             });
    //             me.showicon.on('mouseenter', function() {
    //                 $(".goheader-icon").hide();
    //                 $(".gomyheader").show(); //更多产品 鼠标进 显示

    //             });
    //             me.gotop.on('mouseleave', function() {
    //                 $(".goheader-icon").show();
    //                 $(".gomyheader").hide(); //更多产品 鼠标走 隐藏

    //             });
    //             me.gotop.on("click", function() {
    //                 //回到页头 
    //                 //http://www.zhangxinxu.com/wordpress/2010/07/%E9%94%9A%E7%82%B9%E8%B7%B3%E8%BD%AC%E5%8F%8Ajquery%E4%B8%8B%E7%9B%B8%E5%85%B3%E6%93%8D%E4%BD%9C%E4%B8%8E%E6%8F%92%E4%BB%B6/?jdfwkey=tvile
    //                 $("html,body").animate({ scrollTop: $("#myheader").offset().top }, 1000);
    //             })
    //         }
    //     }
    //     hover.init();

    $("nav ul li").on("mouseenter", function() {
        $(this).children("span").addClass("navon");
    })
    $("nav ul li").on("mouseleave", function() {
        $(this).children("span").removeClass("navon");
    })


    location();
    $(window).resize(function() {
        location();
    })



    function location() {
        var maxwidth = $(window).width();
        if (maxwidth < 1300) {
            maxwidth = 1300;
        }
        var box = $(".showinner ul"),
            boxinner = $(".showinner ul li"),
            i = 1,
            imgnum = box.children().length;
        box.width(maxwidth * 5);
        boxinner.width(maxwidth);
        box.css("margin-left", -maxwidth);
        move();
        $(".dot span").each(function(index) {
            $(".dot span").on('click', function() {
                var bgnum = $(this).index();
                i = bgnum + 1;
                switch (true) {
                    case bgnum == 0:
                        box.stop().animate({
                            "margin-left": -maxwidth
                        }, 500)
                        $(".dot span").eq(bgnum).addClass("dot-on").siblings().removeClass("dot-on");
                        break;
                    case bgnum == 1:
                        box.stop().animate({
                            "margin-left": -maxwidth * 2
                        }, 500)
                        $(".dot span").eq(bgnum).addClass("dot-on").siblings().removeClass("dot-on");
                        break;
                    case bgnum == 2:
                        box.stop().animate({
                            "margin-left": -maxwidth * 3
                        }, 500)
                        $(".dot span").eq(bgnum).addClass("dot-on").siblings().removeClass("dot-on");
                        break;
                }
            })
        })
        var t = setInterval(function() {
            i++;
            move();
        }, 3000)
        $(".showinner ul").hover(function() {
            clearInterval(t);
        }, function() {
            t = setInterval(function() {
                i++;
                move();
            }, 3000)
        })

        function move() {
            console.log(maxwidth);
            if (i == imgnum) {
                box.css({
                    "margin-left": -maxwidth
                })
                i = 2;
            }
            box.stop().animate({
                "margin-left": -i * maxwidth + "px"
            }, 500);

            if (i == imgnum - 1) {
                $(".dot span").eq(0).addClass("dot-on").siblings().removeClass("dot-on");
            } else {
                $(".dot span").eq(i - 1).addClass("dot-on").siblings().removeClass("dot-on");
            }
        }
    }
})
