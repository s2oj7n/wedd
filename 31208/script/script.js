$(function () {
    $(".lnb").hide();
    $(".gnb > li").mouseover(function () {
        $(".lnb").stop().slideDown();
        $(".ll").stop().slideDown();
    })
    $(".gnb > li").mouseout(function () {
        $(".lnb").stop().slideUp();
        $(".ll").stop().slideUp();
    })

    // $(".slide li:gt(0)").hide();
    // setInterval(function(){
    //     $(".slide li:first").fadeOut().next().fadeIn().end().appendTo(".slide ul")
    // },2000)
    setInterval(function () {
        $(".slide ul").animate({ top: -300 }, 2000, function () {
            $(".slide li").eq(0).appendTo($(".slide ul"));
            $(".slide ul").css({ top: 0 })
        })
    },2000)

    $(".qq").click(function () {
        $(".popup").show();
        $(".sss").show();
    })
    $(".popup button").click(function () {
        $(".popup").hide();
        $(".sss").hide();

    })
})