$(document).ready(function(){$(window).scroll(function(){$(this).scrollTop()>10&&$("section .overlay").removeClass("tease")}),$("section").on({touchstart:function(){$(this).find(".overlay").css("opacity","0.94")}}),$("section").on({touchend:function(){$(this).find(".overlay").css("opacity","0")}}),$("nav a").on("touchend",function(o){window.location.href=$(this).attr("href")}),$("section, .cta").css("opacity","0"),$("section:nth-of-type(1)").css("opacity","1"),$("section:nth-of-type(2)").css("opacity","1"),$(window).scroll(function(){$("section, .cta").each(function(o){var t=$(this).position().top+$(this).outerHeight()/2;$(window).scrollTop()+$(window).height()>t&&$(this).animate({opacity:"1"},1500)})})});