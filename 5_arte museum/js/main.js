
function main_load(){
  $(".index_title").find("h1").stop().animate({"opacity":"1"},1000)
  $(".index_title").find("h2").stop().delay(1000).animate({"opacity":"1"},2000)
  $(".index_title").find("h3").stop().delay(2000).animate({"opacity":"1"},3000)
  /* $(".index_title").find("ttest::after").stop().animate({"width":"100%","left":"0"},1000) */
}





$(document).ready(function(){

	 $(".gnb_list").css({"left":"-60%"});
   $(".gnb_footer").css({"left":"-60%"});
  

  /*메뉴버튼*/
  $(".menu_toggle_btn").click(function(){  
		$(".gnb_list").stop().animate({"left":0});
    $(".gnb_footer").stop().animate({"left":0});
    $(".back").stop(true,true).fadeIn();
	});


  /*닫기버튼*/	 
  $(".gnb .close").click(function(){  
		$(".gnb_list").stop().animate({"left":"-60%"});
    $(".gnb_footer").stop().animate({"left":"-60%"});
    $(".back").stop(true,true).fadeOut();
	});


 


  //2.exhibition
  $("#ex_notice").click(function(){  

    $(this).fadeOut("fast")
   }); 



//
/* $(".index_title").mousemove(function(){
  $(this).find("h1").stop().animate({"opacity":"1"},700)
  $(this).find("h2").stop().animate({"opacity":"1"},3000)
  $(this).find("h3").stop().animate({"opacity":"1"},5000)
})
 */





  //4.faQ
  $(".faq_section").click(function(){  

    if($(this).find(".faq_a").css("display")=="none"){
      $(this).find(".faq_a").slideDown();
      $(this).css({color:"#ffc6ee"});
    }else{
      $(this).find(".faq_a").slideUp();
      $(this).css({color:"#fff"});
    }
   }); 












  //6.gallery 모달창
  
	//리스트 이미지 클릭시.....
  $(".photo_list>li").click(function(){

    g_pop=$(this).index();

    $(".g_page span:nth-child(1)").text(g_pop+1); //오른쪽 상단 페이지 넘버
    $("html").css({overflowY:"hidden"}); //기존 html 스크롤 숨기기
		$(".pop>li").eq(g_pop).show(); //g_pop index에 해당하는 팝업보이기
		$("#popup").stop().fadeIn(); //검정배경

  });


  //오른쪽 상단 버튼-다음보기
  $(".right_btn").click(function(){

    if(g_pop<20){

      $(".pop>li").eq(g_pop).stop().fadeOut(); //기존거 사라짐
			g_pop++;

			$(".g_page span:nth-child(1)").text(g_pop+1);
			$(".pop>li").eq(g_pop).stop().fadeIn();

    }

  });


  //오른쪽 상단 버튼-이전보기
  $(".left_btn").click(function(){

    if(g_pop>0){
      $(".pop>li").eq(g_pop).stop().fadeOut(); //기존거 사라짐
      g_pop--;

      $(".g_page span:nth-child(1)").text(g_pop+1);
      $(".pop>li").eq(g_pop).stop().fadeIn();
    }

  });


  //오른쪽 상단 버튼-닫기
  $(".btn_close").click(function(){ 
    
    $("html").css({overflowY:"scroll"});
		$("#popup").stop(true,true).fadeOut();
		$(".pop>li").stop(true,true).hide();

  });

  //more 버튼으로 photo 늘리기

  $(".photo_more_btn").click(function(){

    $(".photo_list li").slideDown();
    $(this).addClass("hidden1")
  })













});