$('.submenu').hide();
// $('#gnb li').mouseenter(function () {
//     $(this).children('.submenu').stop().slideDown()
// });
// $('#gnb li').mouseleave(function () {
//     $(this).children('.submenu').stop().fadeOut()
// });
$(function(){
    $('#gnb li').hover(function(){
      $(this).find('.submenu').slideToggle();
    })
  })