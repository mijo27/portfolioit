var main = function () {
  	"use strict";
  	$(".logonav").on("click", function(){
  		 $(".home").show();
         $(".about").hide();
         $(".work").hide();
         $(".vision").hide();
         $(".contact").hide();
	});
	$(".homenav").on("click", function(){
  		 $(".home").show();
         $(".about").hide();
         $(".work").hide();
         $(".vision").hide();
         $(".contact").hide();
	});
	$(".aboutnav").on("click", function(){
  		 $(".about").show();
  		 $(".home").hide();
         $(".work").hide();
         $(".vision").hide();
         $(".contact").hide();
	});
	$(".worknav").on("click", function(){
  		 $(".work").show();
  		 $(".home").hide();
         $(".about").hide();
         $(".vision").hide();
         $(".contact").hide();
	});
	$(".visinav").on("click", function(){
  		 $(".vision").show();
  		 $(".home").hide();
         $(".about").hide();
         $(".work").hide();
         $(".contact").hide();
	});
	$(".contactnav").on("click", function(){
  		 $(".contact").show();
  		 $(".home").hide();
         $(".about").hide();
         $(".work").hide();
         $(".vision").hide();
	});
}; 
$("document").ready(main);