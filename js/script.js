$('.submenu').hide();
$(function(){
    $('#gnb li').hover(function(){
      $(this).find('.submenu').slideToggle();
    })
  })