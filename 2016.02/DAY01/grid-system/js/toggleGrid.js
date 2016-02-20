document.onkeydown = function(event) {
	if (event.shiftKey && event.keyCode === 71 ) {
		document.querySelector('.container').classList.toggle('grid');
	}
};