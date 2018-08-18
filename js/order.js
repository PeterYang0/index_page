$(function(){
	/*切换页面*/
	$('#second section .steps div').click(function(event) {
		var index=$(this).index();
		$('#second section').eq(index).show(400).siblings().hide(400);
	});
	//
	$('#order_comfirmation .settlement').click(function(event) {
		$('#second section').eq(5).show(400).siblings().hide(400);
	});
	// 选择精度列表
	$('.accuracy').click(function(event) {
		$('.accuracy_drop').toggle(200);
	});
	$('.accuracy_drop div').click(function(event) {
		var val=$(this).text();
		$(this).text($('.accuracy .default').text());
		$('.accuracy .default').text(val)
	});
	$('.type').click(function(event) {
		$('.type_drop').toggle(200);
	});
	$('.type_drop div').click(function(event) {
		var val=$(this).text();
		$(this).text($('.type .default').text());
		$('.type .default').text(val)
	});
	//是否储存
	var isSave=true
	$('#order_save .title span').click(function(event) {
		$(this).addClass('active').siblings().removeClass('active');
		if ($('.save_no').hasClass('active')) {
			isSave=false;
		}else{
			isSave=true;
			var flag;
			for(var i=0;i<3;i++){
				if (!$('#order_save .list .list_line').eq(i).hasClass('active')) {
					flag=false;
				}else{
					flag=true;
					break;
				}
			}
			if (!flag) {
				alert('请先选择存储时间')
			}else{
				console.log('需要存储')
				$("#second section .steps .steps_four").addClass('complete');
				$('#second section').eq(4).show(400).siblings().hide(400);
				$("#second section .steps .steps_five").addClass('active');
			}
		};
		if (isSave) {
			$('#order_save .list .list_line').bind('click',function (){
				$(this).addClass('active').siblings().removeClass('active');
			});
		}else{
			$('#order_save .list .list_line').removeClass('active');
			$('#order_save .list .list_line').unbind('click');
			console.log('不需要存储')
		};
	});
	if (isSave) {
		$('#order_save .list .list_line').bind('click',function (){
			$(this).addClass('active').siblings().removeClass('active');
		});
	};
	// 订单流程
	$('#mojing .shangchuan_img').click(function(event) {
		$("#second section .steps .steps_one").addClass('complete');
		$('#second section').eq(1).show(400).siblings().hide(400);
		$("#second section .steps .steps_two").addClass('active');
	});
	//图片确认
	$('#order_num .sure').click(function(event) {
		$("#second section .steps .steps_two").addClass('active');
		$("#second section .steps .steps_two").addClass('complete');
		$('#second section').eq(2).show(400).siblings().hide(400);
		$("#second section .steps .steps_three").addClass('active');
	});
	//更改
	$('#order_num .change').click(function(event) {
		$('#second section').eq(0).show(400).siblings().hide(400);
	});
	//精度列表提交
	$('#order_list .submit').click(function(event) {
		$("#second section .steps .steps_three").addClass('active');
		$("#second section .steps .steps_three").addClass('complete');
		$('#second section').eq(3).show(400).siblings().hide(400);
		$("#second section .steps .steps_four").addClass('active');
	});
	//订单确认
	$('#order_save .save_no').click(function(event) {
		$("#second section .steps .steps_four").addClass('active');
		$("#second section .steps .steps_four").addClass('complete');
		$('#second section').eq(4).show(400).siblings().hide(400);
		$("#second section .steps .steps_five").addClass('active');
	});
})