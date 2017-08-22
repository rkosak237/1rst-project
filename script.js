$(document).ready(function() {

  // container fixing bug of jumping website - when sticky nav is ON
  $("nav").wrap('<div class="nav-ph"></div>');
  $(".nav-ph").height($("nav").outerHeight());
// sticky nav - start
var mywindow = $(window);
var mypos = mywindow.scrollTop();
var up = false;
var newscroll;
mywindow.scroll(function() {
    newscroll = mywindow.scrollTop();
    if (newscroll > mypos && !up) {
        $("nav").stop().fadeOut() && $("#goTop").fadeOut("fast");
        up = !up;
    } else if(newscroll < mypos && up) {
        $("nav").addClass('fixed').fadeIn() && $("#goTop").fadeIn("slow");
        up = !up;
    }
    mypos = newscroll;
});
// sticky nav - stop

  // smooth scroll- start
    $('.nav-item, .nav-hidden a').click(function(e){
       var linkHr = $(this).attr('href');
       var firstSection = $('#main').outerHeight;
       $('html, body').animate({
         scrollTop: $(linkHr).offset().top}, 1000);
       e.preventDefault();
     });
$('.nav-hidden').click(function() {
  $('a').removeClass('hidN')
});
     // smooth scroll - stop

  //gallery filter start
  $(".first-gal-nav").click(function() {
    var category = $(this).attr("id")
    if (category == "all") {
      $(".category_item").addClass("hide");
      setTimeout(function() {
        $(".category_item").removeClass("hide");
      }, 300);
    } else {
      $(".category_item").addClass("hide");
      setTimeout(function() {
        $("." + category).removeClass("hide");
      }, 300);
    }
  });
//gallery filter stop
$('.card-btn-cta').click(function() {
    alert('yup, its working');
  });
//toggle on/off mobile nav and close after click on chosed section
    $('#burger, .overlay-cont a').click(function() {
      $(".nav-hidden").toggle();
  });
});
