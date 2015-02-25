$(window).scroll(function() {
if ($(this).scrollTop() > 10){  
    $('header').addClass("sticky");
    // $('.full-logo').addClass("hidden");
    $('nav div').addClass("small-nav");
  }
  else{
    $('header').removeClass("sticky");
    // $('.full-logo').removeClass("hidden");
    $('nav div').removeClass("small-nav");
  }
});