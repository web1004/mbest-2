$(document).ready(function() {

	//top_button
	$(".top_btn").hide() 
  $(window).scroll(function(){ 
    if($(this).scrollTop()>800){
      $(".top_btn").fadeIn();
    }else{
      $(".top_btn").fadeOut();
    }
  })

   $(".top_btn").click(function(){
    $("html,body").animate({scrollTop:"0"});
  });

	$("#sideBar").hide() 
  $(window).scroll(function(){ 
    if($(this).scrollTop()>800){
      $("#sideBar").fadeIn();
    }else{
      $("#sideBar").fadeOut();
    }
  })


  $(".nav_X").click(function(){ 
		if($(this).parent().css("right")=="16px"){

			$(this).parent().animate({"right":"-103px"});
			$(this).find(".material-icons").text("chevron_left");
		
		 }else{

			$(this).parent().animate({"right":"16px"});
			$(this).find(".material-icons").text("chevron_right");
		 }


    
  })




	
	/////////////////////////////PAGE/////////////////////////////////////////////////////////
	redrawDotNav();
	
	/* Scroll event handler */
    $(window).bind('scroll',function(e){
    	parallaxScroll();
		redrawDotNav();
    });
    
	/* Next/prev and primary nav btn click handlers */
	$('a.sec01, a.contact').click(function(){
    	$('html, body').animate({
				scrollTop:$('#sec01').offset().top
    	}, 600, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
	});
    $('a.sec02').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#sec02').offset().top
    	}, 600, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    $('a.sec03').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#sec03').offset().top
    	}, 600, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.sec04').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#sec04').offset().top
    	}, 600, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
		$('a.sec05').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#sec05').offset().top
    	}, 600, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
		$('a.sec06').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#sec06').offset().top
    	}, 600, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    
    /* Show/hide dot lav labels on hover */
    $('nav#primary a').hover(
    	function () {
			$(this).prev('h1').show();
		},
		function () {
			$(this).prev('h1').hide();
		}
    );

		
    
});

/* Scroll the background layers */
function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('#parallax-bg1').css('top',(0-(scrolled*.25))+'px');
	$('#parallax-bg2').css('top',(0-(scrolled*.5))+'px');
	$('#parallax-bg3').css('top',(0-(scrolled*.75))+'px');
}

/* Set navigation dots to an active state as the user scrolls */
function redrawDotNav(){
	var section1Top =  0;
	// The top of each section is offset by half the distance to the previous section.
	var section2Top =  $('#sec02').offset().top - (($('#sec03').offset().top - $('#sec02').offset().top) / 2);
	var section3Top =  $('#sec03').offset().top -     (($('#sec04').offset().top - $('#sec03').offset().top) / 2);
	var section4Top =  $('#sec04').offset().top -               (($('#sec05').offset().top - $('#sec04').offset().top) / 2);
	var section5Top =  $('#sec05').offset().top -      (($('#sec06').offset().top - $('#sec05').offset().top) / 2);
	var section6Top =  $('#sec06').offset().top -      (($(document).height() - $('#sec06').offset().top) / 2);


	$('nav#primary a').removeClass('active');
	if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
		$('nav#primary a.sec01').addClass('active');
	} else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
		$('nav#primary a.sec02').addClass('active');
	} else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top){
		$('nav#primary a.sec03').addClass('active');
	} else if ($(document).scrollTop() >= section4Top && $(document).scrollTop() < section5Top){
		$('nav#primary a.sec04').addClass('active');
	} else if ($(document).scrollTop() >= section5Top && $(document).scrollTop() < section6Top){
		$('nav#primary a.sec05').addClass('active');
	} else if ($(document).scrollTop() >= section6Top && $(document).scrollTop() < 7000){
		$('nav#primary a.sec06').addClass('active');
	}
	
}
