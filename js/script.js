$(document).ready(function(){
    $("#back2Top").click(function(event){
        event.preventDefault();
        $("html, body").animate({scrollTop: 0},);
        return false;
    });
});
$(window).scroll(function(){
    var height = $(window).scrollTop();
    if (height > 100) {
        $("#back2Top").fadeIn();
        
    } else {
        $("#back2Top").fadeOut();
    }
})