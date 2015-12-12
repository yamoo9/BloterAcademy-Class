/**
 * --------------------------------
 * #page 디자인
 * --------------------------------
 */
/*#page {
	width: 960px;
	height: 900px;
	margin-left: auto;
	margin-right: auto;
	background: url(../images/guide/grid-system.png);
}*/

var _el;
var g_name;

function toggleGrid(el, name) {
	_el = document.querySelector(el);
	g_name = name;
	_el.classList.toggle(g_name);
}

document.onkeydown = function(event) {
	var key = event.keyCode || event.which;
	if ( key == 71 ) {
		_el.classList.toggle(g_name);
	}
}

// toggleGrid('#page', 'grid');