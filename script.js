$(document).ready(function() {

  $(".nav").wrap('<div class="nav-ph"></div>');
  $(".nav-ph").height($(".nav").outerHeight());

  $(window).scroll(function() {
    var scrollPos = $(window).scrollTop();

    if (scrollPos >= 50) {
      $(".nav").addClass("fixed");
    } else {
      $(".nav").removeClass("fixed");
    }
  });

});
