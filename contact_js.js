(function() {
	var form = document.getElementById('contact');

	// addEvent function is from ultilities.js
	addEvent(form, 'submit', function(e) {
		e.preventDefault();
		var elements = this.elements;
		var name = elements.name.value; // takes the element variable's value (the input)
		var email = elements.email.value;
		var message = elements.message.value;
		});
	}());