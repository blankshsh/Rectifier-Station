$(document).ready(function() {
    $("#introduction").on("click", function() {
        $(this).siblings().removeClass("casenavon");
        $(this).addClass("casenavon");
        $(".introduction").show();
        $(".introduction").siblings().hide();
        $(".show-info").children("h2").text("企业简介");
    })
    $("#speech").on("click", function() {
        $(this).siblings().removeClass("casenavon");
        $(this).addClass("casenavon");
        $(".speech").show();
        $(".speech").siblings().hide();
        $(".show-info").children("h2").text("董事长致辞");
    })
    $("#culture").on("click", function() {
        $(this).siblings().removeClass("casenavon");
        $(this).addClass("casenavon");
        $(".culture").show();
        $(".culture").siblings().hide();
        $(".show-info").children("h2").text("企业文化");
    })
    $("#structure").on("click", function() {
        $(this).siblings().removeClass("casenavon");
        $(this).addClass("casenavon");
        $(".structure").show();
        $(".structure").siblings().hide();
        $(".show-info").children("h2").text("组织架构");
    })
    $("#contact").on("click", function() {
        $(this).siblings().removeClass("casenavon");
        $(this).addClass("casenavon");
        $(".contact").show();
        $(".contact").siblings().hide();
        $(".show-info").children("h2").text("联系我们");
    })
        // $(".case-page").on("click",function () {
        //  $(".casepage").show();
        //  $(".case-inner").hide();
        // })
})
