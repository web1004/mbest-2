$(document).ready(function(){

	$("#mob_top .mainMenu").css({"right":"-60%"});  /*처음위치*/

  /*메뉴버튼*/
  $(".menu_toggle_btn").click(function(){  
		$("#mob_top .mainMenu").stop().animate({"right":0});
    $(".back").stop(true,true).fadeIn();
	});


  /*닫기버튼*/	 
  $(".gnb_list .close").click(function(){  
		$(".mainMenu").stop().animate({"right":"-60%"});
    $(".back").stop(true,true).fadeOut();
	});

});