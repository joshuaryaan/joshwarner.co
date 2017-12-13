$(document).ready(function() {

    //Reveal overlay on touch
    $("section").on({ 'touchstart' : function(){
        $(this).find(".overlay").css("opacity", "0.94");
    } });
    $("section").on({ 'touchend' : function(){
        $(this).find(".overlay").css("opacity", "0");
    } });
    
    //Make links work on a single click on mobile
    $("nav a").on("touchend", function(event) {
      window.location.href = $(this).attr("href");
    });
    
    
});