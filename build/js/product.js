$(document).ready(function() {
		$(".product ul li").on("click",function () {
			$(".product").hide();
			$(".show-info").children("h2").text("家居智能控制系统");
			$(".product-inner").show();
		})
		$(".goback").on("click",function () {
			$(".product").show();
			$(".show-info").children("h2").text("所有产品");
			$(".product-inner").hide();
		})
})