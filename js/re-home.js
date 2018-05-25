window.onscroll = function(){scrollFunction ()};
	function scrollFunction(){
		if(document.body.scrollTop>400 || document.documentElement.scrollTop >400){
			document.getElementById("button-top").style.display = "block";
		}
		else {
			document.getElementById("button-top").style.display = "none";
		}
	}
	document.getElementById("button-top").addEventListener("click", function(e){
		e.preventDefault();
		$('html,body').animate({scrollTop:0}, '300');
	});

	document.getElementById("scroll-AB").addEventListener("click", function(e){
		e.preventDefault();
		$('html,body').animate({scrollTop:(1300)}, '300');
	});
	document.getElementById("scroll-MP").addEventListener("click", function(e){
		e.preventDefault();
		$('html,body').animate({scrollTop:(2000)}, '300');
	});

	document.getElementById("scroll-CM").addEventListener("click", function(e){
		e.preventDefault();
		$('html,body').animate({scrollTop:(2700)}, '300');
	});