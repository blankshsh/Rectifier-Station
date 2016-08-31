$(document).ready(function() {
		$(".casepage ul li").on("click",function () {
			$(".casepage").hide();
			$(".case-inner").show();
		})
		$(".case-page").on("click",function () {
			$(".casepage").show();
			$(".case-inner").hide();
		})
})