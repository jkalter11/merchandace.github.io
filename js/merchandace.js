$(function() {
	$(window).on("scroll touchmove", function () {
		var cutoff = window.innerHeight * 0.4 - 100;
		$('header').toggleClass('small', $(document).scrollTop() > cutoff);
		
		if (($(document).height() - $(document).scrollTop() - $(window).height()) < 400) {
			loadmore();
		}
	});
	
	$('#menu-label-1').mouseover(function() {
//		$('#menu-2').prop('checked', false);
		$('#menu-3').prop('checked', false);
	});
	
/*	$('#menu-label-2').mouseover(function() {
		$('#menu-1').prop('checked', false);
		$('#menu-3').prop('checked', false);
	}); */
	
	$('#menu-label-3').mouseover(function() {
		$('#menu-1').prop('checked', false);
//		$('#menu-2').prop('checked', false);
	});
	
	$('.menu-checkbox').change(function() {
		$('.menu-checkbox').not(this).prop('checked', false);
	});
	
	$('ul.productgrid').on('click', 'a.product', function(e) {
		$expand = $(this).siblings('div');
		$('a.product').removeClass('expand');
		
		if ($expand.css('display') == 'none') {
			$('div.expand').css('display', 'none');
			$(this).addClass('expand');
			$expand.css('display', 'block');
		} else {
			$expand.css('display', 'none');
		}
		
		e.preventDefault();
	});
	
	var next_page = 2;
	var loading = false;
	
	var loadmore = function() {
		if ($('.nomore').length) return false;
		
		if (!loading) {
			loading = true;
			var url = ''+next_page+'.html';
			$.get(url, function(data) {
				$('.productgrid').append(data);
				loading = false;
				next_page++;
			});
		}
	}	
});





