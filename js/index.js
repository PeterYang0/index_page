$(function(){
	//轮播图js部分
	var c=0,b=0;
	$('.circle li').click(function(event) {
		var index=$(this).index();
		c=index;
		var height=$('.block').height();
		$(this).addClass('active').siblings().removeClass('active');
		$(".one").animate({'margin-top': -height*c},400);
	});
	function move(){
		if (c==4) {
			$(".one").css({'margin-top': 0});
			c=1;
		}
		var height=$('.block').height();
		$(".one").animate({'margin-top': -height*c},400);
		b=c;
		b=c==3?0:b;
		$('.circle li').eq(b).addClass('active').siblings().removeClass('active');
		c+=1;
	};
	var timer=setInterval(move,1000);
	$('.circle li').mouseenter(function(event) {
		clearInterval(timer);
	});
	$('.circle li').mouseleave(function(event) {
		clearInterval(timer);
		timer=setInterval(move,1000);
	});
	//页面翻滚事件
 	$('#dowebok').fullpage({
 		scrollOverflow: true,
 		afterLoad:function(anchorLink ,index){
 			if (index>1) {
 				$('.create').hide();
 			}else{
 				$('.create').show();
 			};
 		},
 	});
 	$('.meunList div').height($('.meunList div').width()); 	//设置footer中的宽高相同
 	$(window).resize(function() {
		$('.meunList div').height($('.meunList div').width());
	});

})