$('.submenu').hide();
$('#gnb li').mouseover(function () {
	$(this).children('.submenu').stop().slideDown(500)
});
$('#gnb li').mouseout(function () {
	$(this).children('.submenu').stop().slideUp(100)
});

$(function () {
	$(".right> li> .font0").click(function () {
		$(this).next().slideToggle();
		$('.c p').toggleClass('ab');
	});
	$(".right> li> .font1").click(function () {
		$(this).next().slideToggle();
		$('.d p').toggleClass('ab');
	});
});
$(function () {
	$(".right> li> ul").click(function () {
		$(this).children().children("img").toggleClass("turn");
	});
});



window.onload = function () {
	var bannerLeft = 0;
	var first = 1;
	var last;
	var imgCnt = 0;
	var $img = $(".banner_wraper img");
	var $first;
	var $last;

	$img.each(function () {   // 5px 간격으로 배너 처음 위치 시킴
		$(this).css("left", bannerLeft);
		bannerLeft += $(this).width() + 5;
		$(this).attr("id", "banner" + (++imgCnt));  // img에 id 속성 추가
	});


	if (imgCnt > 8) {                //배너 9개 이상이면 이동시킴



		last = imgCnt;

		setInterval(function () {
			$img.each(function () {
				$(this).css("left", $(this).position().left - 2); // 1px씩 왼쪽으로 이동
			});
			$first = $("#banner" + first);
			$last = $("#banner" + last);
			if ($first.position().left < -200) {    // 제일 앞에 배너 제일 뒤로 옮김
				$first.css("left", $last.position().left + $last.width() + 5);
				first++;
				last++;
				if (last > imgCnt) { last = 1; }
				if (first > imgCnt) { first = 1; }
			}
		}, 20);

	}

};




$('#popup').hide();
$('.popup_open a').click(function(){
    $('#popup').fadeIn(0)
})
$('.popup_close').click(function(){
    $('#popup').fadeOut(0)
})


const bannerList = document.querySelector('.banner_list');
const bannerItems = document.querySelectorAll('.banner');
const numBanners = bannerItems.length;

for (let i = 0; i < numBanners; i++) {
  bannerList.appendChild(bannerItems[i].cloneNode(true));
}

const bannerWidth = bannerItems[0].offsetWidth;
bannerList.style.width = `${bannerWidth * numBanners * 2 + 10 * (numBanners * 2 - 1)}px`;

let currentPos = 0;
let lastTime = 0;

function animate(timestamp) {
  const delta = timestamp - lastTime;
  lastTime = timestamp;

  currentPos -= (bannerWidth + 10) * delta / 1000;
  if (currentPos <= -(bannerWidth + 10) * numBanners) {
    currentPos = 0;
  }
  bannerList.style.transform = `translateX(${currentPos}px)`;

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
