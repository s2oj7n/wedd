$(function () {
   $(".gnb > li").mouseover(function(){
    $(this).find(".lnb").stop().slideDown();
   })
   $(".gnb > li").mouseout(function(){
    $(this).find(".lnb").stop().slideUp();
   })
})