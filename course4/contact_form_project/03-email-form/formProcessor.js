(function () {

	"use strict";

	const emailFormProcessor = 'https://cpe-web-assignments.ucdavis.edu/formprocessing/emailprocessor.php';
	const contactForm = document.getElementById('contactform');
	contactForm.addEventListener('submit', validateForm);

	//Messages to be put in the message element when there is an error or success...
	// The last element in this array loads the preloader css. Looks really cool...
	const feedBackMessage = [

		'<div class="error"><h3>Ooops!</h3><p>The name field is reqired, that\'s how I know who you are. Please fix that and try again!</p></div>',
		'<div class="error"><h3>Ooops!</h3><p>You forgot to give me a valid email address. Please fix that and try again!</p></div>',
		'<div class="error"><h3>Ooops!</h3><p>Somehow you forgot to type in your comment. Please type in your comment and try again!</p></div>',
		'<div class="success"><h3>Thanks!</h3><p>Your thoughts have been sent, and I look forward to reading them.</p></div>',
		'<div class="preloader"><div class="loading-dot"></div></div>'

	];

	// The actual form validation function. Kicks off the asynchronous submission at the bottom.	
	function validateForm(event) {
		event.preventDefault();

		const nameField = document.getElementById('name');
		const emailField = document.getElementById('email');
		const commentField = document.getElementById('comment');

		const reName = /^[a-zA-Z]+(([\'\- ][a-zA-Z])?[a-zA-Z]*)*$/;
		const reEmail = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

		let errors = 0;

		if (!reName.test(nameField.value)) {
			displayMessage(nameField, feedBackMessage[0]);
			errors++;
		}

		else if (!reEmail.test(emailField.value)) {
			displayMessage(emailField, feedBackMessage[1]);
			errors++;
		}

		else if (commentField.value == "") {
			displayMessage(commentField, feedBackMessage[2]);
			errors++;
		}

		else if (errors === 0) {
			sendData();
		}
	}

	// This displays error / success messages
	function displayMessage(field, message) {
		// puts messages in the DOM
	}

	function sendData() {
		// actually sends the data asynchronously
	}

}());
