(function($){$("html").removeClass("wwy");
 $("#header").ready(function(){ $("#progress-bar").stop()
  .animate({ width: "25%" },1500) });
 $("#footer").ready(function(){ $("#progress-bar").stop()
  .animate({ width: "75%" },1500) });
 $(window).load(function(){ $("#progress-bar").stop()
  .animate({ width: "100%" },600,function(){ $("#loading")
   .fadeOut("fast",function(){ $(this)
 .remove(); }); });});})(jQuery);