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
     
});

$(function(){  // $(document).ready shorthand
    $('section').css( "opacity", "0" );
    $('section:first-of-type').css( "opacity", "1" ); //Replace this line with 'if element above fold'
});

//Anna Larson - https://codepen.io/annalarson/pen/GesqK
$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('section').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1500);
                    
            }
            
        }); 
    
    });
    
});
// End credit