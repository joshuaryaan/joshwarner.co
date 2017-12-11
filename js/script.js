$(document).ready(function() {

    $("section").on({ 'touchstart' : function(){
        $(this).find(".overlay").css("opacity", "0.94");
    } });
    $("section").on({ 'touchend' : function(){
        $(this).find(".overlay").css("opacity", "0");
    } });
    
});