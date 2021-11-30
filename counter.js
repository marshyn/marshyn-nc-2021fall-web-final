// character counter

(function () {
	var message = document.getElementById('message');				// get the message textarea element
	var messageCount = document.getElementById('message-count'); 	// get the message-count element
	
	// addEvent function is from ultilities.js
	addEvent(message, 'focus', updateCounter);       // call updateCounter() on focus
  addEvent(message, 'input', updateCounter);		// call updateCounter() on input

  addEvent(message, 'blur', function () {			// on leaving the element
    if (message.value.length <= 100) {				// if message is less than or is 140
      messageCount.className = 'hide';				// hide counter
    }
  });

  function updateCounter(e) {
    var target = e.target || e.srcElement;				// get the target of the event
    var count = 100 - target.value.length;				// how many characters are left
    if (count < 0) {									// if less than 0 chars free
      messageCount.className = 'error';					// then add class error
    } else if (count <= 15) {							// if less than 15 chars free
      messageCount.className = 'warn';					// then add class warn
    } else {											// if not,
      messageCount.className = 'good';					// then add class good
    }
    var charMsg = '<b>' + count + '</b>' + ' characters';		// display the counter
    messageCount.innerHTML = charMsg;							// update counter element
  }

}());