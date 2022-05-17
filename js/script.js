//We'll be using 'JQUERY' here
$(function(){	//This is essentially the same in 'JQUERY' as document.addEventListener("DOMContentLoaded",function(){....}); in normal javascript

	$("#navbarToggle").blur(function (event){		//This is essentially the same in 'JQUERY' as document.querySelector("#navbarToggle").addEventListener("blue",function(event){.....});
		var screenWidth = window.innerWidth;
		if(screenWidth < 768){
			$("#collapsable-nav").collapse('hide');
		}
	});
});
