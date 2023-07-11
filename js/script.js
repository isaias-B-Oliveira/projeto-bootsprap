$(document).ready(function () {
	// Progress bar
	let containerA = document.getElementById("circleA");

	let circleA = new ProgressBar.Circle(containerA, {
		color: "#65DAF9",
		strokeWidth: 8,
		duration: 1400,
		from: { color: "#aaa" },
		to: { color: "#65DAF9" },

		step: function (state, circle) {
			circle.path.setAttribute("stroke", state.color);

			var value = Math.round(circle.value() * 60);
			circle.setText(value);
		}
	});

	
    
	let containerB = document.getElementById("circleB");

	let circleB = new ProgressBar.Circle(containerB, {
		color: "#65DAF9",
		strokeWidth: 8,
		duration: 1600,
		from: { color: "#aaa" },
		to: { color: "#65DAF9" },

		step: function (state, circle) {
			circle.path.setAttribute("stroke", state.color);

			var value = Math.round(circle.value() * 100);
			circle.setText(value);
		}
	});

	let containerC = document.getElementById("circleC");

	let circleC = new ProgressBar.Circle(containerC, {
		color: "#65DAF9",
		strokeWidth: 8,
		duration: 1800,
		from: { color: "#aaa" },
		to: { color: "#65DAF9" },

		step: function (state, circle) {
			circle.path.setAttribute("stroke", state.color);

			var value = Math.round(circle.value() * 150);
			circle.setText(value);
		}
	});

	

	let containerD = document.getElementById("circleD");

	let circleD = new ProgressBar.Circle(containerD, {
		color: "#65DAF9",
		strokeWidth: 8,
		duration: 2000,
		from: { color: "#aaa" },
		to: { color: "#65DAF9" },

		step: function (state, circle) {
			circle.path.setAttribute("stroke", state.color);

			var value = Math.round(circle.value() * 80);
			circle.setText(value);
		}
	});

	let dataAreaoffset = $('#data-area').offset();
	let stop = 0;

	$(window).scroll(function(e) {
		let scroll = $(window).scrollTop();
		if(scroll > (dataAreaoffset.top - 500) && stop == 0 ) {

		    circleA.animate(1.0);
	        circleB.animate(1.0);
	        circleC.animate(1.0);
	        circleD.animate(1.0);

			stop = 1;
		};

	});


	//imagens parallax
	setTimeout(function() {

		$('#data-area').parallax({imageSrc:'img/cidadeparallax.png'});
		$('#apply-area').parallax({imageSrc:'img/pattern.png'});

	}, 250);


	//filtro de portifolio

	$('.filter-btn').on('click', function() {
		let type = $(this).attr('id');
		let boxes = $('.project-box');

		$('.main-btn').removeClass('active');
		$(this).addClass('active');

		if(type == 'dsg-btn') {
			eachBoxes('dsg', boxes)
		}else if(type == 'dev-btn') {
			eachBoxes('dev', boxes)
		}else if(type == 'seo-btn') {
			eachBoxes('seo', boxes)
		}else{
			eachBoxes('all', boxes)
		}
	});

	
	function eachBoxes(type, boxes) {

		if(type== 'all'){
			$(boxes).fadeIn();
		}else{
			$(boxes).each(function() {

				if(!$(this).hasClass(type)) {
					$(this).fadeOut('slow');
				}else{
					$(this).fadeIn();
				};
			});
		};
	};

	//scrow para sesao: com efeito paralaxx:
	let navBtn = $('.nav-item');
	let bannersection = $('#mainSlider');
	let aboutsection = $('#about-area');
	let servicesection = $('#services-area');
	let teansection = $('#tean-area');
	let portifoliosection = $('#portfolio-area');
	let contactsection = $('#contact-area');

	let scrollTO = '';

	$(navBtn).click(function() {

		let btnId = $(this).attr('id');
		if(btnId == 'about-menu') {
			scrollTO = aboutsection;
		}else if(btnId == 'services-menu'){
			scrollTO = servicesection;
		}else if(btnId == 'tean-menu'){
			scrollTO = teansection;
		}else if(btnId == 'portfolio-menu'){
			scrollTO = portifoliosection;
		}else if(btnId == 'contact-menu'){
			scrollTO = contactsection;
		}else{
			scrollTO = bannersection;
		}

		$([document.documentElement, document.body]).animate({
			scrollTop: ($(scrollTO)).offset().top - 70
		}, 1500);
	
	
	});


});
