$('.single-item').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $(this).scroll(function () {
    console.log($(this).scrollTop());
  });


  // $(this).scroll(function() {
  //   if ($(this).scrollTop() == 0 ) {
  //     $('nav').addClass('fixed-top')
      
  //   }
  // });

  $(this).scroll(function () {
    if ($(this).scrollTop() < 700) { 
      $('.a0').css("color" , "red");
      $('.a1,a2,a3,a4,a5,a6').css("color" , "black"); 
    }
  });
$(this).scroll(function () {
  if ($(this).scrollTop() > 700) {
    $('nav').slideDown(500 , function() {
      $('nav').addClass('fixed-top')
    }); 
    $('.a0,.a2,.a3,.a4,.a5,.a6').css("color" , "black");
    $('.a1').css("color" , "red");
  }
});
$(this).scroll(function () {
  if ($(this).scrollTop() > 1480) {
    $('nav').addClass('fixed-top'); 
    $('.a0,.a1,.a3,.a4,.a5,.a6').css("color" , "black");
    $('.a2').css("color" , "red");
  }
});
$(this).scroll(function () {
  if ($(this).scrollTop() > 2180) {
    $('nav').addClass('fixed-top'); 
    $('.a0,.a1,.a2,.a4,.a5,.a6').css("color" , "black");
    $('.a3').css("color" , "red");
  }
});
$(this).scroll(function () {
  if ($(this).scrollTop() > 4300) {
    $('nav').addClass('fixed-top'); 
    $('.a0,.a1,.a2,.a3,.a5,.a6').css("color" , "black");
    $('.a4').css("color" , "red");
  }
});
$(this).scroll(function () {
  if ($(this).scrollTop() > 5020) {
    $('nav').addClass('fixed-top'); 
    $('.a0,.a1,.a2,.a3,.a4,.a6').css("color" , "black");
    $('.a5').css("color" , "red");
  }
});

$(this).scroll(function () {
  if ($(this).scrollTop() > 5590) {
    $('nav').addClass('fixed-top'); 
    $('.a0,.a1,.a2,.a3,.a4,.a5,.a6').css("color" , "black");
    $('.a6').css("color" , "red");
  }
});

