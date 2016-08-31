$(document).ready(function() {
    $("nav ul li").on("mouseenter", function() {
        $(this).children("span").addClass("navon");
    })
    $("nav ul li").on("mouseleave", function() {
        $(this).children("span").removeClass("navon");
    })
})
