$(document).ready(function() {
  // sticky nav - start
  $("nav").wrap('<div class="nav-ph"></div>');
  $(".nav-ph").height($("nav").outerHeight());


var mywindow = $(window);
var mypos = mywindow.scrollTop();
var up = false;
var newscroll;
mywindow.scroll(function () {
    newscroll = mywindow.scrollTop();
    if (newscroll > mypos && !up) {
        $("nav").stop().fadeOut();
        up = !up;
        console.log(up);
    } else if(newscroll < mypos && up) {
        $("nav").addClass('fixed').fadeIn();
        up = !up;
    }
    mypos = newscroll;
});

  // sticky nav - stop

  // smooth scroll - start
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

     // fadeOut - start
  $(window).scroll(function() {
    if ($(window).scrollTop() >= 200) {
      $("#goTop").fadeIn("slow");
    } else {
      $("#goTop").fadeOut("fast");
    }
  });

  /**smooth scroll - start**/
  /*gallery filter start*/
  $(".first-gal-nav").click(function(){
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
  })
  $('.button-middle').click(function(){
    alert('yup, its working');
  })
    /*gallery filter stop*/

//toggle on/off mobile nav and close after click on chosed section
    $('#burger, .overlay-cont a').click(function() {
      $(".nav-hidden").toggle();
  });

$('#mix').click(function(){
  $('.category_item').shuffle();
});
var mixPic = [".category_item + ' ''  "]

});
