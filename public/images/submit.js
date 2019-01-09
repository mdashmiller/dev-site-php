$('#submit').click(e => {
	e.preventDefault()
	
    $.ajax({
        url: 'email.php',
        type: 'POST',
        success: res => alert(res)
    })
})
