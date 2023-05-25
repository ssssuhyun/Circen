$('.submenu').hide();
$('#gnb li').mouseover(function () {
    $(this).children('.submenu').stop().slideDown(500)
});
$('#gnb li').mouseout(function () {
    $(this).children('.submenu').stop().slideUp(100)
});

