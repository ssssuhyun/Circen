$('.submenu').hide();
$('#gnb li').mouseover(function () {
    $(this).children('.submenu').stop().slideDown(700)
});
$('#gnb li').mouseout(function () {
    $(this).children('.submenu').stop().fadeOut(100)
});