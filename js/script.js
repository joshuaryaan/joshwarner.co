$(document).ready(function() {

    $(window).scroll(function() {
        if ($(this).scrollTop() > 10) {
            $("section .overlay").removeClass("tease");;    
        }
    });
    
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

    //Hide all sections except the top two
    $('section').css( "opacity", "0" );
    $('section:nth-of-type(1)').css( "opacity", "1" ); //Replace this line with 'if element above fold'
    $('section:nth-of-type(2)').css( "opacity", "1" );
    
    //Fade in on scroll
    //Credit to Anna Larson - https://codepen.io/annalarson/pen/GesqK
    //Edited by Josh Warner
    $(window).scroll( function(){
        /* Check the location of each desired element */
        $('section').each( function(i){
            var middle_of_object = $(this).position().top + $(this).outerHeight()/2;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* If the object is half visible in the window, fade it it */
            if( bottom_of_window > middle_of_object ){ 
                $(this).animate({'opacity':'1'},1500);  
            }
        }); 
    });
    // End credit
});