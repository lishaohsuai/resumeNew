(function  (argument) {
	var btn = document.getElementsByClassName("close-bg")[0];
	
	btn.addEventListener('click', function(){
		var body = document.getElementsByClassName('bg')[0];
		//console.log(body.style)
        body.className = "bg-new";

	})
})()