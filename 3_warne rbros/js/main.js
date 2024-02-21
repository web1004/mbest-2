$(document).ready(function(){

	//메인이미지 전환
  let showImg=0;
  let nextImg=0;


  function changeImg(){

    nextImg++;
    ImgCount=$(".mainvisual .visual li").length;

    if(nextImg==ImgCount){ //순환
      nextImg=0;

    }

    $(".mainvisual .visual li").eq(showImg).removeClass("imgVisible"); 
    $(".mainvisual .visual li").eq(nextImg).addClass("imgVisible"); 
    $(".mainvisual .btn>span").eq(showImg).removeClass("active");

    $(".mainvisual .btn>span").eq(nextImg).addClass("active"); 

    showImg=nextImg;
  }




  timer1=setInterval(changeImg,5000);




  //메인이미지:텍스트 전환
  let showText=0;
  let nextText=0;


  function changeText(){ 

    nextText++;
    TextCount=$(".mainvisual .visual li").length;

    if(nextText==TextCount){ //순환
      nextText=0;

    }

    $(".mainvisual .visual li .Vtext").eq(showText).removeClass("textVisible"); 
    $(".mainvisual .visual li .Vtext").eq(nextText).addClass("textVisible"); 
    $(".mainvisual .btn>span").eq(showText).removeClass("active");

    $(".mainvisual .btn>span").eq(nextText).addClass("active"); 

    showText=nextText;
  }
  
  timer2=setInterval(changeText,5000);







  /* stop/play*/
   $(".play").hide();
   

   $(".stop").click(function(){
     clearInterval(timer1);
     clearInterval(timer2);
     $(".stop").hide();
     $(".play").show();
   });
 
   $(".play").click(function(){
     timer1=setInterval(changeImg,5000);
     timer2=setInterval(changeText,5000);
     $(".play").hide();
     $(".stop").show();
   });



 
 
 





  //상단 버튼 클릭

  $(".mainvisual .btn>span").click(function(){

    clearInterval(timer1); 
    clearInterval(timer2);
    //상단버튼 클릭시 stop/play
    $(".play").hide();
    $(".stop").show();



    nextImg=$(this).index(); 
    nextText=$(this).index(); 

    timer1=setInterval(changeImg,5000);
    timer2=setInterval(changeText,5000);



    $(".mainvisual .visual li").eq(showImg).removeClass("imgVisible"); 
    $(".mainvisual .visual li").eq(nextImg).addClass("imgVisible"); 
    $(".mainvisual .btn>span").eq(showImg).removeClass("active");
    $(".mainvisual .btn>span").eq(nextImg).addClass("active"); 
    showImg=nextImg;



    $(".mainvisual .visual li .Vtext").eq(showText).removeClass("textVisible"); 
    $(".mainvisual .visual li .Vtext").eq(nextText).addClass("textVisible"); 
    $(".mainvisual .btn>span").eq(showText).removeClass("active");
    $(".mainvisual .btn>span").eq(nextText).addClass("active"); 
    showText=nextText;

    
    

   






  })

    


/* 햄버거메뉴토글 */
    $(".menu_toggle_btn").click(function(){
      $(this).toggleClass("menu-open");
      $(".topBox3").slideToggle("fast");

      $(".slideControl").toggleClass("testtest");

      

    });
  









    
    
  
  





});