$(function() {

	$('.tel_input').click(function() {
		if($(this).val() == $(this).attr('title')) {
			$(this).val('');
			$(this).css({
				'color': '#333'
			});
		}
	}).blur(function() {
		if($(this).val() == '') {
			$(this).val($(this).attr('title'));
			$(this).css({
				'color': '#999'
			});
		}
	})
	$('.tj_btn').mousedown(function() {
		$(this).css({
			'text-indent': '3px',
			'line-height': '48px'
		});
	}).mouseup(function() {
		$(this).css({
			'text-indent': '0px',
			'line-height': '46px'
		});
	});
	//头部导航下拉去掉最后一条线
	$('.site_nav_ul>li').find('li:last').css({
		'border-bottom': 'none'
	});
	//在线留言
	$('.xuanfubox .liuyan_btn').click(function() {
		var opac_h = $(document).height();
		$('.opac_div').css({
			'height': opac_h
		});
		$('.opac_div').fadeIn(70);
		$('.massage_box').fadeIn(300);
	})
	$('.liuyan2 .gb,.opac_div').click(function() {
		$('.massage_box').fadeOut(300);
		$('.opac_div').fadeOut(300);
	})
	//底部悬浮关闭
	var timer = ''; //底部悬浮定时开启
	$('.xuanfubox .xf_closebtn').click(function() {
		$('.xuanfubox').fadeOut();
		setTimeout(function() {
			$('.xuanfubox').fadeIn();
		}, 5000);
	});
	$('.site_nav .site_nav_ul>li').hover(function() {
		$(this).find('ol').stop(true, true).slideDown(300);
	}, function() {
		$(this).find('ol').stop(true, true).slideUp(100);
	})
	$('.left_navdl dd:last').css({
		'background': 'none'
	});
})

	//得到url参数
	function getUrlParam(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
		var r = window.location.search.substr(1).match(reg); //匹配目标参数
		if(r != null) return unescape(r[2]);
		return null; //返回参数值
	}