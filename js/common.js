jQuery(document).ready(function($){
// document start


 // Navbar
 $( "<span class='clickD'><i class='fas fa-chevron-down chatperMenuArrow'></i></span>" ).appendTo(".navbar-nav li.menu-item-has-children > a");
 $('.navbar-nav li > a').click(function(e) {
     e.preventDefault();
     var $this = $(this);
     if ($this.next().hasClass('show'))
        {
            $this.next().removeClass('show');
            $this.find(".clickD").removeClass('toggled');
        } 
        else 
        {
            $this.parent().parent().find('.sub-menu').removeClass('show');
            $this.parent().parent().find('.toggled').removeClass('toggled');
            $this.next().toggleClass('show');
            $this.find(".clickD").toggleClass('toggled');
        }
 });

 $(window).on('resize', function(){
     if ($(this).width() < 1025) {
         $('html').click(function(){
             $('.navbar-nav li .clickD').removeClass('toggled');
             $('.toggled').removeClass('toggled');
             $('.sub-menu').removeClass('show');
         });
         $(document).click(function(){
             $('.navbar-nav li .clickD').removeClass('toggled');
             $('.toggled').removeClass('toggled');
             $('.sub-menu').removeClass('show');
         });
         $('.navbar-nav').click(function(e){
            e.stopPropagation();
         });
     }
 });
 // Navbar end


 
/* ===== For menu animation === */
$(".navbar-toggler").click(function(){
    $(".navbar-toggler").toggleClass("open");
    $(".navbar-toggler .stick").toggleClass("open");
    $('body,html' ).toggleClass("open-nav");
});

// Navbar end





// to make sticky nav bar
$(window).scroll(function() {     
    var scroll = $(window).scrollTop();     
    if (scroll > 200) { 
        $(".header").addClass("fixed"); 
    } 
    else {
      $(".header").removeClass("fixed"); 
    }
}) 


// smooth scroll to any section
// if($('a.scroll').length){
//     $("a.scroll").on('click', function(event) {
//       if (this.hash !== "") {
//         event.preventDefault();
//         var target = this.hash, $target = $(target);
//         $('html, body').animate({
//           scrollTop: $target.offset().top - 60
//         }, 800, function(){
//           window.location.href.substr(0, window.location.href.indexOf('#'));
//         });
//       } 
//     });
  
//   }


// back to top
if($("#scroll").length){
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 200) { 
            $('#scroll').fadeIn(200); 
        } else { 
            $('#scroll').fadeOut(200); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 500); 
        return false; 
    }); 
}




// one page scroll menu link
// $('a[href*="#"]').on('click', function (e) {
//     e.preventDefault();
//     $(document).off("scroll");
//     $('.navbar-nav > li > a').each(function () {
//         $(this).parent('li').removeClass('current-menu-item');
//     });
//     $(this).parent('li').addClass('current-menu-item');
//     var target = this.hash, $target = $(target);
//     $('html, body').stop().animate({
//         'scrollTop': $target.offset().top
//     }, 500, 'swing', function () {
//         window.location.href.substr(0, window.location.href.indexOf('#'));
//         $(document).on("scroll", onScroll);
//     });
// });
//  $(document).on("scroll", onScroll);
// function onScroll(event){
//     var scrollPos = $(document).scrollTop() + 100;
//     $('.navbar-nav > li > a').each(function () {
//         var currLink = $(this);
//         var refElement = $(currLink.attr("href"));
//         if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
//             $('.navbar-nav > li').removeClass("current-menu-item");
//             currLink.parent('li').addClass("current-menu-item");
//         }
//         else{
//             currLink.parent('li').removeClass("current-menu-item");
//         }
//     });
// }





// slick slider

$('.banner_slider').slick({
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  centerMode: true,
  adaptiveHeight: true,
  centerPadding: '0px',
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// common sliders
$('.commonSlider1').slick({
  dots: false,
  arrows: true,
  infinite: false,
  slidesToShow: 7.5,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  centerMode: false,
  adaptiveHeight: true,
  centerPadding: '0',
  draggable: false,
  responsive: [
    {
      breakpoint: 1366,
      settings: {
        slidesToShow: 5.5,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 4.5,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3.3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3.3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1
      }
    }
  ]
});

$('.commonSlider_sm').slick({
  dots: false,
  arrows: true,
  infinite: false,
  slidesToShow: 9.2,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  centerMode: false,
  adaptiveHeight: true,
  centerPadding: '0',
  draggable: false,
  responsive: [
    {
      breakpoint: 1366,
      settings: {
        slidesToShow: 5.5,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 4.5,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3.3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3.3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1
      }
    }
  ]
});


// search result
$('#searchInput').keyup(function() {

  var length = $(this).val().length;
  
  if  (length == 0 ){
    $(this).parent(".searchModal_seacrh").next().addClass('hideSearchResult');
    $(this).parent(".searchModal_seacrh").removeClass("hasBorder");
  
  } else{
    $(this).parent(".searchModal_seacrh").next().removeClass('hideSearchResult');
    $(this).parent(".searchModal_seacrh").addClass("hasBorder");
  } 

});

// open reading left menu
$(".openReadingMneuBtn").click(function(){
  $(this).parent(".reading_left").toggleClass("reading_menu_open");
  $(this).parent(".reading_left").next(".reading_right").toggleClass("readingRight_smallWidth");
  $(this).toggleClass("openReadingMneuBtn_open")
});
$(".readingMenu_mobile").click(function(){
  $(".reading_left").toggleClass("reading_menu_open");
  $('body,html' ).toggleClass("open_reading_overlay");
});
$(".reading_overlay, .readingMenu_close").click(function(){
  $(".reading_left").removeClass("reading_menu_open");
  $('body,html' ).removeClass("open_reading_overlay");
});


$('.readingMenu .chapterMenuHasChildren > a').click(function(e) {
  e.preventDefault();
  var $this = $(this);
  if ($this.next().hasClass('open'))
     {
         $this.next().removeClass('open');
         $this.parent().toggleClass('activeMenu');
     } 
     else 
     {
         $this.parent().parent().find('.chapterSubmenu').removeClass('open');
         $this.parent().parent().find('.activeMenu').removeClass('activeMenu');
         $this.next().toggleClass('open');
         $this.parent().toggleClass('activeMenu');
         
     }
});



  






// document end

})


