$(".box-A").css("opacity", "0") //あらかじめbox-Aを消しておく
$(window).scroll(function(){
  $(".box-bg").each(function(){ //box-bgが1/5スクロールすると
    var imgTop = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if(scroll > imgTop - windowHeight + windowHeight/5){
      $(".box-A").css("opacity", "1"); //出現
    }else{
      $(".box-A").css("opacity", "0"); //そうじゃない場合消える
    }
  });
});
