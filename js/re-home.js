window.onscroll = function(){scrollFunction ()};
	function scrollFunction(){
		if(document.body.scrollTop>500 || document.documentElement.scrollTop >500){
			document.getElementById("button-top").style.display = "block";
		}
		else {
			document.getElementById("button-top").style.display = "none";
		}
	}