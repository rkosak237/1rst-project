$(document).ready(function() {
  /**sticky nav - start**/
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
    /**sticky nav - stop**/
    $('.nav-item').click(function(e){
       var linkHr = $(this).attr('href');
       var firstSection = $('#top').outerHeight;

       $('html, body').animate({
         scrollTop: $(linkHr).offset().top-60}, 1000);
       e.preventDefault();
     });
  /**smooth scroll - start**/
  $(window).scroll(function() {
    if ($(window).scrollTop() >= 200) {
      $("#goTop").fadeIn("slow");
    } else {
      $("#goTop").fadeOut("fast");
    }

  });
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
});

function openNav() {
  document.getElementById("hidNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("hidNav").style.width = "0%";
}
