function includeHTML() {
	var a, i, element, file, linkURL;


	/*loop through all HTML elements*/

	a = document.getElementsById("*");		// get all the elements by their IDs

	for (i = 0; i < a.length; i++) {
		element = a[i];
		file = element.getAttribute("header");
	if (file) {
			/*make an HTTP request using the attribute value as the file name:*/
			linkURL = new XMLHttpRequest();
			linkURL.onreadystatechange = function() {
			if (this.readyState == 4) {
				if (this.status == 200) {element.innerHTML = this.responseText;}
				if (this.status == 404) {element.innerHTML = "Page not found.";}

			/*remove the attribute, and call this function once more:*/
			includeHTML();
		}
      }      
      linkURL.open("GET", file, true);
      linkURL.send();
      /*exit the function:*/
      return;
    }
  }
};