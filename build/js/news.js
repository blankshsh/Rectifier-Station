$(document).ready(function() {
	$(".img-info p").dotdotdot({
	});
	$(".read-btn").on("click",function () {
		$("#news").hide();
		$("#newsinner").show();
	})
	$(".goback").on("click",function () {
		$("#news").show();
		$("#newsinner").hide();
	})
});