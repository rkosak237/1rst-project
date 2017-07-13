$(document).ready(function() {
  // sticky nav - start
  $("nav").wrap('<div class="nav-ph"></div>');
  $(".nav-ph").height($("nav").outerHeight());

// hide nav when user is scrolling down, show when he's scrolling up
var mywindow = $(window);
var mypos = mywindow.scrollTop();
var up = false;
var newscroll;
mywindow.scroll(function () {
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

     // fadeOut - start

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

  });
// Shuffle start
var testAr = ['gallery/bar.jpg', 'gallery/basketball.jpg', 'gallery/forest.jpg', 'gallery/library.jpg', 'gallery/mural.jpg', 'gallery/woods.jpg', 'gallery/street.jpg', 'gallery/forest1.jpg', 'gallery/forest2.jpeg', 'gallery/bw_1.jpg', 'gallery/forest3.jpg', 'gallery/bw_2.jpeg', 'gallery/street1.jpeg', 'gallery/forest4.jpeg', 'gallery/street2.jpeg', 'gallery/various1.jpeg'];


function shuffle() {
  let randomize = testAr.sort(function() {
    return 0.5 - Math.random()
  });
  randomize.toString();
  document.getElementById("gallery").innerHTML = testAr;
  const spaceAr = testAr.join(", ");

}

function printOut() {
  var imgs = "";

      for (var i = 0; i < testAr.length; i++) {
          var img = document.createElement('img');
          img.setAttribute('src', testAr[i]);
          img.setAttribute('class', 'category_item');
          imgs += img.outerHTML;
      }

      var container = document.getElementById('gallery');
      container.innerHTML = imgs;
}

const btnCheck = document.getElementById('mix').addEventListener('click', shuffle);
const print = document.getElementById('mix').addEventListener('click', printOut);

// Shuffle stop
$('.button-middle').click(function(){
    alert('yup, its working');
  })
    /*gallery filter stop*/

//toggle on/off mobile nav and close after click on chosed section
    $('#burger, .overlay-cont a').click(function() {
      $(".nav-hidden").toggle();
  });

});
