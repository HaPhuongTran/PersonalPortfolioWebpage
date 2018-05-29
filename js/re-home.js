window.onscroll = function(){scrollFunction ()};
	function scrollFunction(){
		if(document.body.scrollTop>400 /*|| document.documentElement.scrollTop >400 *//*vi tri khi scrooll*/){
			document.getElementById("button-top").style.display = "block";
		}
		else {
			document.getElementById("button-top").style.display = "none";
		}
	}
	document.getElementById("button-top").addEventListener("click", function(e){
		$('html,body').animate({scrollTop:0}, 800);
	});

	document.getElementById("scroll-AB").addEventListener("click", function(e){
		$('html,body').animate({scrollTop:$("#about_me").position().top});
	});
	document.getElementById("scroll-MP").addEventListener("click", function(e){
		$('html,body').animate({scrollTop:$("#my_product").position().top});
	});

	document.getElementById("scroll-CM").addEventListener("click", function(e){
		$('html,body').animate({scrollTop:$("#Contact").position().top});
	});