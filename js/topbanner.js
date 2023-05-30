/* 최상단배너 하루동안 닫기  */
jQuery(".main_top_banner .top_banner_box_inner .top_banner_close .icon").bind("click", function() {
    if(jQuery("#top_banner_box_cloase").is(":checked")){
        jQuery(".main_top_banner").slideUp("fast");
        setCookiem("top_banner_cookie", "top_banner_cookie", 1);
     } else {
        jQuery(".main_top_banner").slideUp("fast");
     }
});

var main_top_banner_diplay = jQuery(".main_top_banner").attr("data-ez-display");
if (!getCookiem("top_banner_cookie") && (main_top_banner_diplay == 'visible')) {
jQuery(".main_top_banner").slideDown("fast");
}

/*최상단배너 닫기버튼 없을시 높이 수정 */
if(jQuery(".top_banner_close").css("display") == "none"){
jQuery(".main_top_banner").addClass('close_none');
if (main_top_banner_diplay == 'visible') {
    jQuery(".main_top_banner").slideDown("fast");
}
}