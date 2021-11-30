// function that adds an event listener (if no event listener is detected)
function addEvent(el, event, callback) {
	if ('addEventListener' in el) {						// does the addEventListener work?
		el.addEventListener(event, callback, false);	// yes: so use it
	} else {											// since the addEventListener doesn't work ...
		el['e' + event + callback] = callback;			// do this instead: callback variable is now a method of el
		el[event + callback] = function () {			// second method
			el['e' + event + callback](window,event);	// call previous function
		};
		el.attachEvent('on' + event, el[event + callback]); // .attachEvent function calls second function which calls the first one
	}

}