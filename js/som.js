	//轮播自动播放设置时间
	$('#myCarousel').carousel({
		interval:2000,
	});
	$(document).ready(function(){

            $("#navbar-collapse .dropdown-menu a").click(function(){
               var href=$(this).attr("href");
               $("#tab-list a[href='" + href + "']").tab("show");
            });
          });
