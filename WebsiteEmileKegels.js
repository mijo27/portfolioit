var main = function () {
  	"use strict";
  	$(".logonav").on("click", function(){
  		 $(".home").show();
         $(".about").hide();
         $(".oeuvre").hide();
         $(".vision").hide();
         $(".contact").hide();
	});
	$(".homenav").on("click", function(){
  		 $(".home").show();
         $(".about").hide();
         $(".oeuvre").hide();
         $(".vision").hide();
         $(".contact").hide();
	});
	$(".aboutnav").on("click", function(){
  		 $(".about").show();
  		 $(".home").hide();
         $(".oeuvre").hide();
         $(".vision").hide();
         $(".contact").hide();
	});
	$(".oeuvrenav").on("click", function(){
  		 $(".oeuvre").show();
  		 $(".home").hide();
         $(".about").hide();
         $(".vision").hide();
         $(".contact").hide();
	});
	$(".visinav").on("click", function(){
  		 $(".vision").show();
  		 $(".home").hide();
         $(".about").hide();
         $(".oeuvre").hide();
         $(".contact").hide();
	});
	$(".contactnav").on("click", function(){
  		 $(".contact").show();
  		 $(".home").hide();
         $(".about").hide();
         $(".oeuvre").hide();
         $(".vision").hide();
	});
}; 
$("document").ready(main);