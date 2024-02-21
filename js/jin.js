

$(document).ready(function(){



  //main
  $(window).scroll(function(){ //브라우저에 스크롤이 발생하는 순간부터 
		 let curpos=$(window).scrollTop(); 



     if (curpos>=930) {
       $(".skill_ul li:nth-child(1) .skill_bar, .skill_ul li:nth-child(3) .skill_bar, .skill_ul li:nth-child(1) .skill_bar2, .skill_ul li:nth-child(3) .skill_bar2").addClass("skills1");
       $(".skill_ul li:nth-child(2) .skill_bar,.skill_ul li:nth-child(4) .skill_bar, .skill_ul li:nth-child(2) .skill_bar2,.skill_ul li:nth-child(4) .skill_bar2").addClass("skills2");
       $(".skill_ul li:nth-child(5) .skill_bar, .skill_ul li:nth-child(5) .skill_bar2").addClass("skills3");
     } else {
       $(".skill_bar").removeClass("skills1 skills2 skills3");
     }



    $("#txt1").text($(this).scrollTop());

    

    if($(this).scrollTop()<29){
      $(".main_blue").stop().animate({top:0},"normal");
    }else if($(this).scrollTop()>30 && $(this).scrollTop()<200){
      $(".main_blue").stop().animate({top:curpos+100},"normal");
    } else if($(this).scrollTop()<201){
      $(".main_blue").stop().animate({top:100},"normal");
    } 

    if($(this).scrollTop()<29){
      $(".main_gold").stop().animate({top:0},"slow");
    }else if($(this).scrollTop()>30 && $(this).scrollTop()<200){
      $(".main_gold").stop().animate({top:curpos},"slow");
    } else if($(this).scrollTop()<201){
      $(".main_gold").stop().animate({top:0},"slow");
    } 

    if($(this).scrollTop()<29){
      $(".main_text").stop().animate({top:150},"slow");
    }else if($(this).scrollTop()>30 && $(this).scrollTop()<200){
      $(".main_text").stop().animate({top:curpos+250},"slow");
    } else if($(this).scrollTop()<201){
      $(".main_text").stop().animate({top:0},"slow");
    } 


    if($(this).scrollTop()>300){
      $(".jinlogo").fadeOut();
    }else{
      $(".jinlogo").fadeIn();
    } 

    if($(this).scrollTop()>6600){
      $(".thanks_position").stop().animate({"opacity":"1","right":"20px"});
    }



    
	});



  

  //02
  $(".sec02_panel>li:not(:first)").hide();
	//첫번째를 제외한 나머지 내용 숨기기



  //--------02-1
  $(".sec02_tab>li").click(function(){


    for(i=0;i<6;i++){  
			$(".sec02_tab li").eq(i).find(">a>img").attr({"src":"img/tab"+i+".png"}); 
			//선택되지 않은 이미지는 회색이미지로....  
		}

    inum=$(this).index();
    $(this).find("a img").attr({"src":"img/tabon"+inum+".png"});

    $(".sec02-1_i1").removeClass("active1");  //css에서 적용된 1번째 현재위치활성화 해지
		
    $(".sec02_panel>li").hide();//기존의 보여진 내용 숨기기
		$($(this).find("a").attr("href")).show();//새로 선택된 내용 href 연결된내용 보여주기
   
  });




	//리스트 이미지 클릭시.....
  $(".graphic_list>li").click(function(){

    g_pop=$(this).index();

    $(".g_page span:nth-child(1)").text(g_pop+1); //오른쪽 상단 페이지 넘버
    $("html").css({overflowY:"hidden"}); //기존 html 스크롤 숨기기
		$(".sec02-1_pop>li").eq(g_pop).show(); //g_pop index에 해당하는 팝업보이기
		$("#sec02-1_popup").stop().fadeIn(); //검정배경
    $("#sideBar").fadeOut();
    $(".top_btn").fadeOut();

  });

  


  $(".sec02_i2").click(function(){
    $(this).removeClass("sec02_clicked2");
    $(this).addClass("sec02_clicked");
    $(".sec02_i1").removeClass("sec02_clicked");
    $(".sec02_i1").addClass("sec02_clicked2");
  });

  $(".sec02_i1").click(function(){
    $(this).addClass("sec02_clicked");
    $(this).removeClass("sec02_clicked2");
    $(".sec02_i2").removeClass("sec02_clicked");
    $(".sec02_i2").addClass("sec02_clicked2");
  });

















    //--------02-2
  /*   $(".sec02-2_tab>li").click(function(){

      for(i=0;i<6;i++){  
        $(".sec02-2_tab li").eq(i).find(">a>img").attr({"src":"img/tab"+i+".png"}); 
     
      }
  
      inum=$(this).index();
      $(this).find("a img").attr({"src":"img/tabon"+inum+".png"});
  
      $(".sec02-2_i1").removeClass("active1"); 
      
      $(".sec02_panel>li").hide();
      $($(this).find("a").attr("href")).show();
    });
   */
  
  
  
    //리스트 이미지 클릭시.....
    $(".uiux_list>li").click(function(){
  
      g_pop2=$(this).index();
  
      $(".g_page span:nth-child(1)").text(g_pop2+1); //오른쪽 상단 페이지 넘버
      $("html").css({overflowY:"hidden"}); //기존 html 스크롤 숨기기
      $(".sec02-2_pop>li").eq(g_pop2).show(); //g_pop index에 해당하는 팝업보이기
      $("#sec02-2_popup").stop().fadeIn(); //검정배경
      $("#sideBar").fadeOut();
      $(".top_btn").fadeOut();
  
    });





  



















    
    //02-1
  //오른쪽 상단 버튼-다음보기
  $(".right_btn").click(function(){

    $("#sec02-1_popup").scrollTop(0);

    if(g_pop<11){

      $(".sec02-1_pop>li").eq(g_pop).stop().fadeOut(); //기존거 사라짐
			g_pop++;

			$(".g_page span:nth-child(1)").text(g_pop+1);
			$(".sec02-1_pop>li").eq(g_pop).stop().fadeIn();

    }

  });


  //오른쪽 상단 버튼-이전보기
  $(".left_btn").click(function(){

    $("#sec02-1_popup").scrollTop(0);

    if(g_pop>0){
      $(".sec02-1_pop>li").eq(g_pop).stop().fadeOut(); //기존거 사라짐
      g_pop--;

      $(".g_page span:nth-child(1)").text(g_pop+1);
      $(".sec02-1_pop>li").eq(g_pop).stop().fadeIn();
    }

  });


  //오른쪽 상단 버튼-닫기
  $(".btn_close").click(function(){ 
    
    $("html").css({overflowY:"scroll"});
		$("#sec02-1_popup").stop(true,true).fadeOut();
		$(".sec02-1_pop>li").stop(true,true).hide();
    $("#sideBar").fadeIn();
    $(".top_btn").fadeIn();

  });







    //02-2
  //오른쪽 상단 버튼-다음보기
  $(".right_btn2").click(function(){

    $("#sec02-2_popup").scrollTop(0);

    if(g_pop2<8){

      $(".sec02-2_pop>li").eq(g_pop2).stop().fadeOut(); //기존거 사라짐
			g_pop2++;

			$(".g_page2 span:nth-child(1)").text(g_pop2+1);
			$(".sec02-2_pop>li").eq(g_pop2).stop().fadeIn();

    }

  });


  //오른쪽 상단 버튼-이전보기
  $(".left_btn2").click(function(){

    $("#sec02-2_popup").scrollTop(0);

    if(g_pop2>0){
      $(".sec02-2_pop>li").eq(g_pop2).stop().fadeOut(); //기존거 사라짐
      g_pop2--;

      $(".g_page2 span:nth-child(1)").text(g_pop2+1);
      $(".sec02-2_pop>li").eq(g_pop2).stop().fadeIn();
    }

  });


  //오른쪽 상단 버튼-닫기
  $(".btn_close2").click(function(){ 
    
    $("html").css({overflowY:"scroll"});
		$("#sec02-2_popup").stop(true,true).fadeOut();
		$(".sec02-2_pop>li").stop(true,true).hide();
    $("#sideBar").fadeIn();
    $(".top_btn").fadeIn();
  });















  //03

  
	//화살표 깜빡깜빡___________________________________
  function guide1(){
    $(".w_slide_btn>i").toggleClass("active");
  }
  auto1=setInterval(guide1,500);


  //태블릿 화면(오버시 화면 올라가게)_________________
  /* $(".w_tab_slide ul li:nth-child(n)").mouseenter(function(){
    $(this).css("background-position","0 100%");
  });
  $(".w_tab_slide ul li:nth-child(n)").mouseleave(function(){
    $(this).css("background-position","0 0");
  }); */


  //웹디자인 슬라이드__________________________________
  $(".w_list li").click(function(){

    clearInterval(auto1);  //화살표 깜빡거림 멈추게

    $(".w_list li").removeClass("btn_active"); //기존 숫자 
    $(this).addClass("btn_active");  //클릭한 숫자

    val=$(this).index(); 
    $(".w_bg ul").animate({"left":-1300*val+"px"});  //왼쪽 배경이미지 슬라이드
    $(".w_txt_slide ul").animate({"left":-300*val+"px"});  //왼쪽 설명텍스트 슬라이드
    $(".w_tab_slide ul").animate({"left":-794*val+"px"});  //오른쪽 태블릿이미지 슬라이드

  });


  //DETAIL 버튼 클릭시 모달창 띄우기_______________________
  $(".w_txt_slide>ul>li>span").click(function(){

    w_pop=$(this).parent().index();	//Detail 버튼의 부모의 index	 
   
    $("html").css({overflowY:"hidden"}); //기존 html 스크롤 숨기기
    $(".w_pop>li").eq(w_pop).show(); //w_pop index에 해당하는 팜업보이기
    $("#w_popup").stop(true,true).fadeIn(); //검정배경    
    $("#sideBar").fadeOut();
    $(".top_btn").fadeOut();

  });

  

 
    /*오른쪽 상단 버튼-닫기*/
	$(".w_btn_close, .w_back").click(function(){
		$("html").css({overflowY:"scroll"});
		$("#w_popup").stop(true,true).fadeOut();
		$(".w_pop>li").stop(true,true).hide();
    $("#sideBar").fadeIn();
    $(".top_btn").fadeIn();
	}); 

	







  //04
    //DETAIL 버튼 클릭시 모달창 띄우기_______________________
    $(".w_txt_slide_04>ul>li>span").click(function(){

      w_pop4=$(this).parent().index();	//Detail 버튼의 부모의 index	 
     
      $("html").css({overflowY:"hidden"}); //기존 html 스크롤 숨기기
      $(".w_pop_04>li").eq(w_pop4).show(); //w_pop index에 해당하는 팜업보이기
      $("#w_popup_04").stop(true,true).fadeIn(); //검정배경    
      $("#sideBar").fadeOut();
    $(".top_btn").fadeOut();
    });
  
    
  
   
      /*오른쪽 상단 버튼-닫기*/
    $(".w_btn_close_04, .w_back_04").click(function(){
      $("html").css({overflowY:"scroll"});
      $("#w_popup_04").stop(true,true).fadeOut();
      $(".w_pop_04>li").stop(true,true).hide();
      $("#sideBar").fadeIn();
    $(".top_btn").fadeIn();
    }); 
  
    


//05
    //DETAIL 버튼 클릭시 모달창 띄우기_______________________
    $(".w_txt_slide_05>ul>li>span").click(function(){

      w_pop5=$(this).parent().index();	//Detail 버튼의 부모의 index	 
     
      $("html").css({overflowY:"hidden"}); //기존 html 스크롤 숨기기
      $(".w_pop_05>li").eq(w_pop5).show(); //w_pop index에 해당하는 팜업보이기
      $("#w_popup_05").stop(true,true).fadeIn(); //검정배경    
      $("#sideBar").fadeOut();
    $(".top_btn").fadeOut();
    });
  
    
  
   
      /*오른쪽 상단 버튼-닫기*/
    $(".w_btn_close_05, .w_back_05").click(function(){
      $("html").css({overflowY:"scroll"});
      $("#w_popup_05").stop(true,true).fadeOut();
      $(".w_pop_05>li").stop(true,true).hide();
      $("#sideBar").fadeIn();
    $(".top_btn").fadeIn();
    }); 
  
    

//05  버튼-모바일 폰 연결
/* $(".sec05_btn1").click(function(){//각 메뉴를 클릭했을때
  $(this).next().show(); //다음 형제인 .pop을 보이게함
  $('#ttee').attr('src', $('#ttee').attr('src'));
  $("html").css({overflowY:"hidden"});//body스크롤없앰
  return false;
});


$(".close").click(function(){/
  $(".sec05_pop").hide(); //
  $("html").css({"overflow-y":"scroll"}); 
});


$(".sec05_pop").click(function(){
  $("html").css({"overflow-y":"scroll"});
  $(".sec05_pop").hide();
  return false;
});

 */



//06-1

	//리스트 이미지 클릭시.....
  $(".sec06_plan_steps>li:not(:last-child)").click(function(){

    g_pop6=$(this).index();

    $(".g_page_06 span:nth-child(1)").text(g_pop6+1); //오른쪽 상단 페이지 넘버
    $("html").css({overflowY:"hidden"}); //기존 html 스크롤 숨기기
		$(".pop_06>li").eq(g_pop6).show(); //g_pop6 index에 해당하는 팝업보이기
		$("#popup_06").stop().fadeIn(); //검정배경
    $("#sideBar").fadeOut();
    $(".top_btn").fadeOut();
  });



  //오른쪽 상단 버튼-다음보기
  $(".right_btn_06").click(function(){

    if(g_pop6<2){

      $(".pop_06>li").eq(g_pop6).stop().fadeOut(); //기존거 사라짐
			g_pop6++;

			$(".g_page_06 span:nth-child(1)").text(g_pop6+1);
			$(".pop_06>li").eq(g_pop6).stop().fadeIn();

    }

  });


  //오른쪽 상단 버튼-이전보기
  $(".left_btn_06").click(function(){

    if(g_pop6>0){
      $(".pop_06>li").eq(g_pop6).stop().fadeOut(); //기존거 사라짐
      g_pop6--;

      $(".g_page_06 span:nth-child(1)").text(g_pop6+1);
      $(".pop_06>li").eq(g_pop6).stop().fadeIn();
    }

  });


  //오른쪽 상단 버튼-닫기
  $(".btn_close_06").click(function(){ 
    
    $("html").css({overflowY:"scroll"});
		$("#popup_06").stop(true,true).fadeOut();
		$(".pop_06>li").stop(true,true).hide();
    $("#sideBar").fadeIn();
    $(".top_btn").fadeIn();
  });






















//06-2

	//리스트 이미지 클릭시.....
  $(".sec06_plan_steps_02>li:not(:last-child)").click(function(){

    g_pop6_2=$(this).index();

    $(".g_page_06_02 span:nth-child(1)").text(g_pop6_2+1); //오른쪽 상단 페이지 넘버
    $("html").css({overflowY:"hidden"}); //기존 html 스크롤 숨기기
		$(".pop_06_02>li").eq(g_pop6_2).show(); //g_pop6_2 index에 해당하는 팝업보이기
		$("#popup_06_02").stop().fadeIn(); //검정배경
    $("#sideBar").fadeOut();
    $(".top_btn").fadeOut();
  });



  //오른쪽 상단 버튼-다음보기
  $(".right_btn_06_02").click(function(){

    if(g_pop6_2<2){

      $(".pop_06_02>li").eq(g_pop6_2).stop().fadeOut(); //기존거 사라짐
			g_pop6_2++;

			$(".g_page_06_02 span:nth-child(1)").text(g_pop6_2+1);
			$(".pop_06_02>li").eq(g_pop6_2).stop().fadeIn();

    }

  });


  //오른쪽 상단 버튼-이전보기
  $(".left_btn_06_02").click(function(){

    if(g_pop6_2>0){
      $(".pop_06_02>li").eq(g_pop6_2).stop().fadeOut(); //기존거 사라짐
      g_pop6_2--;

      $(".g_page_06_02 span:nth-child(1)").text(g_pop6_2+1);
      $(".pop_06_02>li").eq(g_pop6_2).stop().fadeIn();
    }

  });


  //오른쪽 상단 버튼-닫기
  $(".btn_close_06_02").click(function(){ 
    
    $("html").css({overflowY:"scroll"});
		$("#popup_06_02").stop(true,true).fadeOut();
		$(".pop_06_02>li").stop(true,true).hide();
    $("#sideBar").fadeIn();
    $(".top_btn").fadeIn();
  });



  

//06-3

	//리스트 이미지 클릭시.....
  $(".sec06_plan_steps_03>li:not(:last-child)").click(function(){

    g_pop6_3=$(this).index();

    $(".g_page_06_03 span:nth-child(1)").text(g_pop6_3+1); //오른쪽 상단 페이지 넘버
    $("html").css({overflowY:"hidden"}); //기존 html 스크롤 숨기기
		$(".pop_06_03>li").eq(g_pop6_3).show(); //g_pop6_3 index에 해당하는 팝업보이기
		$("#popup_06_03").stop().fadeIn(); //검정배경
    $("#sideBar").fadeOut();
    $(".top_btn").fadeOut();
  });



  //오른쪽 상단 버튼-다음보기
  $(".right_btn_06_03").click(function(){

    if(g_pop6_3<2){

      $(".pop_06_03>li").eq(g_pop6_3).stop().fadeOut(); //기존거 사라짐
			g_pop6_3++;

			$(".g_page_06_03 span:nth-child(1)").text(g_pop6_3+1);
			$(".pop_06_03>li").eq(g_pop6_3).stop().fadeIn();

    }

  });


  //오른쪽 상단 버튼-이전보기
  $(".left_btn_06_03").click(function(){

    if(g_pop6_3>0){
      $(".pop_06_03>li").eq(g_pop6_3).stop().fadeOut(); //기존거 사라짐
      g_pop6_3--;

      $(".g_page_06_03 span:nth-child(1)").text(g_pop6_3+1);
      $(".pop_06_03>li").eq(g_pop6_3).stop().fadeIn();
    }

  });


  //오른쪽 상단 버튼-닫기
  $(".btn_close_06_03").click(function(){ 
    
    $("html").css({overflowY:"scroll"});
		$("#popup_06_03").stop(true,true).fadeOut();
		$(".pop_06_03>li").stop(true,true).hide();
    $("#sideBar").fadeIn();
    $(".top_btn").fadeIn();

  });






































  //06 gallery-1
  

  //썸네일, 큰 이미지,설명텍스트가 바뀐느 함수 만들기
  let old_pic=0;  //기존이미지
  let selece_pic=0;  //선택되는이미지

  function galleryImg(selece_pic){  //selece_pic는 선택되는 이미지

    if(old_pic!=selece_pic){//기존이미지와 선택된이미지가 다를때...

      $(".thumbs li").eq(old_pic).css({"opacity":0.3}); //기존썸네일 흐리게
      $(".thumbs li").eq(selece_pic).css({"opacity":1}); //선택된썸네일 선명하게
      $(".largeImg li").eq(old_pic).stop().fadeOut(300); //기존이미지사라짐
      $(".largeImg li").eq(selece_pic).stop().fadeIn(300);//선택된이미지 나타남

    }
    old_pic=selece_pic; //선택된이미지는 다시 기존이미지로 지정
  }





  //썸네일버튼 클릭시.......

  $(".thumbs li").click(function(){
    
    selece_pic=$(this).index();
    galleryImg(selece_pic);
  });






  //이전버튼 클릭시.......



  $(".gal06_left_btn").click(function(){
    
    selece_pic--;
    if(selece_pic<0){ //선택이미지가 0일때 다시 맨뒤부터 시작
      selece_pic=9;
    }
    galleryImg(selece_pic);
  });



  //다음버튼 클릭시.......
  $(".gal06_right_btn").click(function(){
    
    selece_pic++;
    if(selece_pic>9){ //선택이미지가 마지막일때 다시 처음부터 시작
      selece_pic=0;
    }
    galleryImg(selece_pic);
  });
















  
  //06 gallery-2
  

  //썸네일, 큰 이미지,설명텍스트가 바뀐느 함수 만들기
  let old_pic2=0;  //기존이미지
  let selece_pic2=0;  //선택되는이미지

  function galleryImg_02(selece_pic2){  //selece_pic2는 선택되는 이미지

    if(old_pic2!=selece_pic2){//기존이미지와 선택된이미지가 다를때...

      $(".thumbs_02 li").eq(old_pic2).css({"opacity":0.3}); //기존썸네일 흐리게
      $(".thumbs_02 li").eq(selece_pic2).css({"opacity":1}); //선택된썸네일 선명하게
      $(".largeImg_02 li").eq(old_pic2).stop().fadeOut(300); //기존이미지사라짐
      $(".largeImg_02 li").eq(selece_pic2).stop().fadeIn(300);//선택된이미지 나타남


    }
    old_pic2=selece_pic2; //선택된이미지는 다시 기존이미지로 지정
  }





  //썸네일버튼 클릭시....... 몇번째클릭할지모르기때문에 인덱스 필요

  $(".thumbs_02 li").click(function(){
    
    selece_pic2=$(this).index();
    galleryImg_02(selece_pic2);
  });






  //이전버튼 클릭시.......



  $(".gal06_left_btn_02").click(function(){
    
    selece_pic2--;
    if(selece_pic2<0){ //선택이미지가 0일때 다시 맨뒤부터 시작
      selece_pic2=8;
    }
    galleryImg_02(selece_pic2);
  });



  //다음버튼 클릭시.......
  $(".gal06_right_btn_02").click(function(){
    
    selece_pic2++;
    if(selece_pic2>8){ //선택이미지가 마지막일때 다시 처음부터 시작
      selece_pic2=0;
    }
    galleryImg_02(selece_pic2);
  });






  
  
  //06 gallery-3
  

  //썸네일, 큰 이미지,설명텍스트가 바뀐느 함수 만들기
  let old_pic3=0;  //기존이미지
  let selece_pic3=0;  //선택되는이미지

  function galleryImg_03(selece_pic3){  //selece_pic3는 선택되는 이미지

    if(old_pic3!=selece_pic3){//기존이미지와 선택된이미지가 다를때...

      $(".thumbs_03 li").eq(old_pic3).css({"opacity":0.3}); //기존썸네일 흐리게
      $(".thumbs_03 li").eq(selece_pic3).css({"opacity":1}); //선택된썸네일 선명하게
      $(".largeImg_03 li").eq(old_pic3).stop().fadeOut(300); //기존이미지사라짐
      $(".largeImg_03 li").eq(selece_pic3).stop().fadeIn(300);//선택된이미지 나타남


    }
    old_pic3=selece_pic3; //선택된이미지는 다시 기존이미지로 지정
  }





  //썸네일버튼 클릭시....... 몇번째클릭할지모르기때문에 인덱스 필요

  $(".thumbs_03 li").click(function(){
    
    selece_pic3=$(this).index();
    galleryImg_03(selece_pic3);
  });






  //이전버튼 클릭시.......



  $(".gal06_left_btn_03").click(function(){
    
    selece_pic3--;
    if(selece_pic3<0){ //선택이미지가 0일때 다시 맨뒤부터 시작
      selece_pic3=9;
    }
    galleryImg_03(selece_pic3);
  });



  //다음버튼 클릭시.......
  $(".gal06_right_btn_03").click(function(){
    
    selece_pic3++;
    if(selece_pic3>9){ //선택이미지가 마지막일때 다시 처음부터 시작
      selece_pic3=0;
    }
    galleryImg_03(selece_pic3);
  });




  
  //06 gallery-4
  

  //썸네일, 큰 이미지,설명텍스트가 바뀐느 함수 만들기
  let old_pic4=0;  //기존이미지
  let selece_pic4=0;  //선택되는이미지

  function galleryImg_04(selece_pic4){  //selece_pic4는 선택되는 이미지

    if(old_pic4!=selece_pic4){//기존이미지와 선택된이미지가 다를때...

      $(".thumbs_04 li").eq(old_pic4).css({"opacity":0.3}); //기존썸네일 흐리게
      $(".thumbs_04 li").eq(selece_pic4).css({"opacity":1}); //선택된썸네일 선명하게
      $(".largeImg_04 li").eq(old_pic4).stop().fadeOut(300); //기존이미지사라짐
      $(".largeImg_04 li").eq(selece_pic4).stop().fadeIn(300);//선택된이미지 나타남


    }
    old_pic4=selece_pic4; //선택된이미지는 다시 기존이미지로 지정
  }





  //썸네일버튼 클릭시....... 몇번째클릭할지모르기때문에 인덱스 필요

  $(".thumbs_04 li").click(function(){
    
    selece_pic4=$(this).index();
    galleryImg_04(selece_pic4);
  });






  //이전버튼 클릭시.......



  $(".gal06_left_btn_04").click(function(){
    
    selece_pic4--;
    if(selece_pic4<0){ //선택이미지가 0일때 다시 맨뒤부터 시작
      selece_pic4=9;
    }
    galleryImg_04(selece_pic4);
  });



  //다음버튼 클릭시.......
  $(".gal06_right_btn_04").click(function(){
    
    selece_pic4++;
    if(selece_pic4>9){ //선택이미지가 마지막일때 다시 처음부터 시작
      selece_pic4=0;
    }
    galleryImg_04(selece_pic4);
  });






  //06
  //호버시 하단 서브메뉴 나오게


  $(".plan").mouseenter(function(){
    $(this).find(".sec06_plan_list").css({"height":"210px"}); 
    $(this).find(".sec06_bot").css({"opacity":"1"}); 
  })

  $(".plan").mouseleave(function(){
    $(this).find(".sec06_plan_list").css({"height":"560px"});
    $(this).find(".sec06_bot").css({"opacity":"0"});
  })



  //06 하단 btn 클릭 모달



  //06-1 버튼
  //각 목록을 클릭했을때.....
  $(".bot_btn1").click(function(){ 
    $(this).next().show(); //다음 형제인 .pop을 보이게함
    $("html").css({overflowY:"hidden"}); //스크롤바 없앰 
    $(".sec06_plan_list").css({"opacity":"0"}); 
    $(".square2").css({"opacity":"0"}); 
    $(".square3").css({"opacity":"0"}); 
    return false;
  });

   //06-2 버튼
  //각 목록을 클릭했을때.....
  $(".bot_btn2").click(function(){ 
    $(this).next().show(); //다음 형제인 .pop을 보이게함
    $("html").css({overflowY:"hidden"}); //스크롤바 없앰 
    $(".sec06_plan_list").css({"opacity":"0"}); 
    $(".square1").css({"opacity":"0"}); 
    $(".square3").css({"opacity":"0"}); 
    $('#ttee2').attr('src', $('#ttee2').attr('src'));
    return false;
  });

   //06-3 버튼
  //각 목록을 클릭했을때.....
  $(".bot_btn3").click(function(){ 
    $(this).next().show(); //다음 형제인 .pop을 보이게함
    $("html").css({overflowY:"hidden"}); //스크롤바 없앰 
    $(".sec06_plan_list").css({"opacity":"0"}); 
    $(".square1").css({"opacity":"0"}); 
    $(".square2").css({"opacity":"0"}); 
    return false;
  });


  //close버튼과 검정배경영역을 클릭할때.....
  $(".close_tomato, .pop_tomato, .close").click(function(){
    $(".pop_tomato").hide(); //.pop을 안보이게함
    $("html").css({"overflow-y":"scroll"});//html스크롤 다시 보이게 함	
    $(".sec06_plan_list").css({"opacity":"1"}); 
    $(".square1").css({"opacity":"1"}); 
    $(".square2").css({"opacity":"1"}); 
    $(".square3").css({"opacity":"1"}); 
  });  




  //마무리인사

  $(".thanks").click(function(){
    $(this).animate({"width":"1260px","height":"370px"},300); 
    $(this).css({"animation":"none"}); 
    $(this).find(".material-icons").css({"opacity":"0"}); 
    $(".thanks_text").css({"opacity":"1"}); 
    $("#sideBar").fadeOut();
  })

  $(".thanks_x").click(function(){
    $(".thanks").animate({"width":"100px","height":"50px"},300); 
    $(".thanks").css({"animation":"bounce 0.4s ease infinite alternate"}); 
    $(".thanks").find(".material-icons").css({"opacity":"1"}); 
    $(".thanks_text").css({"opacity":"0"}); 
    $("#sideBar").fadeIn();
  })
  

  //컨택버튼
  $(".contact").click(function(){
    $(".bubble").css({"animation":"bounce 0.4s ease infinite alternate","top":"20px"});
});


//arte버튼클릭시

$(".btn_arte").click(function(){
  $(".square1").css({"opacity":"1"}); 
  $(".square2").css({"opacity":"1"}); 
  $(".square3").css({"opacity":"1"}); 
});  







	
});