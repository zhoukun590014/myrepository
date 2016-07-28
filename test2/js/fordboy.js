/*
 name : chenyanlin;
 QQ:278101055;
 E-mail:278101055@qq.com;
 */
var total = $("#solid ul").children().length;
var backColorList = ["#78c4db", "#c5c9db", "#e7dfd1", "#c5c9db"];
var now = 0;
//轮播图定时滚动
function clock() {
	$("#solid ul li").css("display", "none");
	$("#btt span").css("background", "#3d3d3d");
	if(now == total - 1) {
		now = 0;
	} else {
		now = now + 1;
	}
	$("#solid ul li").eq(now).fadeIn(400);
	$("#btt span").eq(now).css("background", "#ffffff");
	$("#solid").attr("style", "background:" + backColorList[now]);
	/*$(".nav-line").attr("style", "background:" + backColorList[now]);
	$(".header .content .nav li a:hover ").attr("style", "color:" + backColorList[now]);*/
}
//导航效果
function nav() {
	var $liCur = $(".nav>ul>li.cur"),
		curP = $liCur.position().left,
		curW = $liCur.outerWidth(true),
		$slider = $(".nav-line"),
		$targetEle = $(".nav>ul>li:not('.last')"),
		$navBox = $(".nav");
	$slider.stop(true, true).animate({
		"left": curP,
		"width": curW
	});
	$targetEle.mouseenter(function() {
		var $_parent = $(this); //.parent(),
		_width = $_parent.outerWidth(true),
			posL = $_parent.position().left;
		$slider.stop(true, true).animate({
			"left": posL,
			"width": _width
		}, "fast");
	});
	$navBox.mouseleave(function(cur, wid) {
		cur = curP;
		wid = curW;
		$slider.stop(true, true).animate({
			"left": cur,
			"width": wid
		}, "fast");
	});
	$targetEle.click(function() {
		$(this).attr("style", "color:red;")
	});
};
$(document).ready(function() {
	nav();
	$("#solid ul li").eq(0).fadeIn(400);
	$("#btt span").eq(0).css("background", "#ffffff");
	$("#solid .solid0").fadeIn(50);
	$("#solid").attr("style", "background:" + backColorList[now]);
	$("#solid ul li,#btt span").mouseenter(function() {
		window.clearInterval(int);
	});
	$("#btt span").mouseenter(function() {
		if($(this).index() != now) {
			now = $(this).index() - 1;
			clock();
		}
	});
	var int = self.setInterval("clock()", 3000)
	$("#solid ul li,#solid span").mouseleave(function() {
		int = self.setInterval("clock()", 3000)
	});
});