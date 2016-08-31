$(function() {
    $(".product-box .product-nav ul li").each(function(index) {
        $(this).on('mouseover', function() {
            $('.product-nav ul li').removeClass("on");
            $('.product-inner ul li').hide();
            $('.product-inner ul li').eq(index).show();
            $(this).addClass("on");
        })
    })
})
