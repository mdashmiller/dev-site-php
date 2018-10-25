$(document).ready(() => {
	// Material css functionality
	$('.sidenav').sidenav()
	$('.parallax').parallax()
	$('.tooltipped').tooltip()
	$('.scrollspy').scrollSpy()

	// prevent form submit from reloading page
	$('.btn').on('click', e =>
		e.preventDefault()
	)
})
