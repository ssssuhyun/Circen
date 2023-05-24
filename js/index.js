timer();
var current = 0;
var $interval;

function timer() {
    var $interval = setInterval(function () { slide() },5000);
}

function slide() {
    $(".bannerbox").animate({ left: "-=187px" }, 500, function () {
        $(this).css({ "left": 0 });
        $(".bannerbox").append($(".bannerbox").children(".bannerbox li").eq(0));
    });
    current++;
    if (current == 5) current = 0;
}    