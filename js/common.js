$(document).ready(function() {

	$(".popup").magnificPopup({type:"image"});
	$(".popup_call").magnificPopup();

	$.stellar({
		responsive: true,
		horizontalOffset: 60
	});

  $(".carousel").owlCarousel({
  	loop : true,
  	responsive : {
  		0 : {
  			items : 1,
  			nav : true
  		}
  	},
  	navText : ""
  });


	function wResize() {
		$("min-header").css("height", $(window).height());
	};
	wResize();
	$(window).resize(function(){
		wResize()
	});

	$(".top_phone .wrapper .tab").click(function() {
		$(".top_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".top_phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".tabs_header .wrapper .tab").click(function() {
		$(".tabs_header .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tabs_header .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".contact .contact_top .tab").click(function() {
		$(".contact_top .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".contact .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".bottom_phone .wrapper .tab").click(function() {
		$(".bottom_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".bottom_phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function(e) {
		var ths = $(this);
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "anat369@rambler.ru",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				var magnificPopup = $.magnificPopup.instance;
				magnificPopup.close();
				ths.trigger("reset");
			}, 1000);
		});
		return false;
	});
});

$(window).load(function() {

	$(".top_header h1").animated("fadeInDown", "fadeInDown");
	$(".top_header h2").animated("fadeInUp", "fadeInUp");

	$(".tabs_header .wrapper").animated("flipInY", "flipInY");

	$(".profi").animated("bounceInLeft", "bounceInLeft");

	$(".profi h2").animated("bounceInLeft", "bounceInLeft");

	$(".tiz_text").animated("zoomIn", "zoomIn");

	$(".flash h3").animated("flash", "flash");

	$(".footer h2").animated("zoomIn", "zoomIn");
});