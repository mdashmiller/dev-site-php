$(document).ready(() => {
	// Materialize css functionality
	$('.parallax').parallax()
	$('.tooltipped').tooltip()
	$('.scrollspy').scrollSpy()

	// hide mini-nav or mobile to-top-button
	// when user is at top of window
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

	// show and hide mini-nav on mouseover or touch
	$('#mini-nav-btn').on('mouseenter touchend', e => {
		$('#mini-nav-menu').addClass('visible')
		// disable the 'menu' li to keep the menu from 
		// immediately closing when user touches
		// 'menu' to open it or to prevent flicker
		// of menu closing and reopening if user
		// clicks on 'menu'
		$('#mini-nav-menu li:nth-child(5)').off('click')
		// if user is on touch device, re-enable ability
		// to close menu by touching 'menu' li
		if (e.type === 'touchend') {
			setTimeout(() => {
				$('#mini-nav-menu li:nth-child(5)').on('click', () =>{
					$('#mini-nav-menu').removeClass('visible')
				})
			}, 250)
		}
	})
	
	$('#mini-nav-menu').mouseleave(() =>
		$('#mini-nav-menu').removeClass('visible')
	)

	// hide mini-nav when a menu item is selected
	$('#mini-nav-menu li').on('click', () =>
		$('#mini-nav-menu').removeClass('visible')
	)
	
	// toggle mobile nav on burger touch
	$('.burger').on('click', () => {
		$('.mobile-menu').toggleClass('visible')
	})

	// hide mobile nav when user touches a link
	$('.mobile-menu a').on('click', () =>
		$('.mobile-menu').removeClass('visible')
	)

	// hide mobile nav when user touches away from it
	$('div').not('.mobile-menu').not('.navbar').on('click', () => {
		if ($('.mobile-menu').hasClass('visible')) {
			$('.mobile-menu').removeClass('visible')
		}
	})

	$('.brand-logo').on('click', () => {
		if ($('.mobile-menu').hasClass('visible')) {
			$('.mobile-menu').removeClass('visible')
		}
	})

	// prevent any accidental clicking of links when user
	// touches away from the mobile nav dropdown
	$('section a').on('click', e => {
		if ($('.mobile-menu').hasClass('visible')) {
			e.preventDefault()
		}
	})

	$('footer a').on('click', e => {
		if ($('.mobile-menu').hasClass('visible')) {
			e.preventDefault()
		}
	})

	// form submit button will only work when
	// the mobile nav dropdown is hidden
	$('.btn').on('click', e => {
		if ($('.mobile-menu').hasClass('visible')) {
			console.log('i did nothing')
		} else {
			console.log('i did my primary function')
		}

		// prevent submit from reloading page
		e.preventDefault()		
	})
})
