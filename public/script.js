$(document).ready(() => {
	// Material css functionality
	$('.sidenav')
	    .sidenav()
	    .on('click tap', 'li a', () => 
	        $('.sidenav').sidenav('close')
		)
	$('.parallax').parallax()
	$('.tooltipped').tooltip()
	$('.scrollspy').scrollSpy()

	// hide mini-nav when user is at top of window
	$(window).scroll(() => {
		if ($(window).scrollTop() !== 0) {
			if ($(window).width() > 992) {
				$('#mini-nav-btn').addClass('visible')
			} else {
				$('#mini-nav-to-top').addClass('visible')
			}
		} else {
			$('.mini-nav').removeClass('visible')
		}
	})

	// show and hide mini-nav on mouseover
	$('#mini-nav-btn').hover(() =>
		$('#mini-nav-menu').addClass('visible')
	)
	$('#mini-nav-menu').mouseleave(() =>
		$('#mini-nav-menu').removeClass('visible')
	)

	// hide mini-nav when a menu item is selected
	$('#mini-nav-menu').on('click', () =>
		$('#mini-nav-menu').removeClass('visible')
	)

	// show mobile nav on burger click
	$('.burger').on('click', () =>
		$('.mobile-menu').addClass('visible')
	)

	// hide mobile nav when user touches a link
	$('.mobile-menu a').on('click', () =>
		$('.mobile-menu').removeClass('visible')
	)

	// prevent form submit from reloading page
	$('.btn').on('click', e =>
		e.preventDefault()
	)
})
