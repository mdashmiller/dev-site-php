import email from '../../config.js'

// handle contact form submit
// and send data to php script
$('#submit').click(e => {
	e.preventDefault()

	const to = email.address
	const sender = $('#email').val()
	const message = $('#message').val()

    $.ajax({
        url: 'scripts/email.php',
        type: 'POST',
        data: {
        	to,
        	sender,
        	message
        },
        success: res => {
        	alert(res)

        	// reset form to initial styles
        	$('#email, #message').val('')
        	$('.prefix, [for="email"], [for="message"]').removeClass('active')
        }
    })
})
