// handle contact form submit
// and send data to php script
$('#submit').click(e => {
	e.preventDefault()

	const email = $('#email').val()
	const message = $('#message').val()

    $.ajax({
        url: 'scripts/email.php',
        type: 'POST',
        data: {
        	email,
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
