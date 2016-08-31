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
})
