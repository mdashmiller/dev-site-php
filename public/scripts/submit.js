import email from '../../config.js'

$(document).ready(() => {
	// handle contact form interactivity

	// form element targets
	const statusDisplay = $('.input-field p')
	const btn = $('#submit')

	// clear status display messages when user clicks in a field
	$('.input-field').click(() => {
			if (statusDisplay.hasClass('fail') || statusDisplay.hasClass('success')) {
				statusDisplay.text('')
			}
	})

	// handle form submit
	$('form').submit(e => {
		e.preventDefault()

		const url = 'scripts/email.php' // php .mail()
		const to = email.address // mail destination
		const sender = $('#email').val() // user's email form form
		const message = $('#message').val() // user's message from form

		// check that both form fields contain data
		if (!sender || !message) {
			// display a message if either is empty
			statusDisplay.text('Needs more input!')
				.addClass('fail')
		} else {
			// display 'sending' message and icon
			statusDisplay
				.html(
					'<i class="fas fa-spinner fa-spin pink-text text-darken-3"></i>' +
					'<span>        sending...</span>'
				).removeClass('success fail')

			// call php .mail()
			const mail = $.post(url, {to, sender, message})

			// display proper ui messages when php .mail() returns
			mail.done(res => {
				// success
				if (res === 'mail sent') {
					// display green success message
					statusDisplay.text('Message sent!')
						.addClass('success')

					// reset form to initial styles upon successful submission
					btn.text('submit')
					$('#email, #message').val('')
					$('.prefix, [for="email"], [for="message"]').removeClass('active')
				// failure
				} else {
					// display red error message
					statusDisplay
						.text('Hm, there seems to be a connection error. Please try again later!')
						.addClass('fail')
						
					// have form button read 'retry' until a successful submit occurs
					btn.text('retry')
				}
			})
		}
	})
})
