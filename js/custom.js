$(window).scroll(function() {
if ($(this).scrollTop() > 10){  
    $('header').addClass("sticky-header");
    $('.full-logo').addClass("sticky-logo");
    $('nav').addClass("sticky-nav");
    $('.nav-button').addClass("sticky-nav-button");
  }
  else{
    $('header').removeClass("sticky-header");
    $('.full-logo').removeClass("sticky-logo");
    $('nav').removeClass("sticky-nav");
    $('.nav-button').removeClass("sticky-nav-button");
  }
});


