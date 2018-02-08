$(document).ready(function () {
	$('.type-it').typeIt({
		strings: 'This is a simple string.',
		speed: 40,
		autoStart: false
	});
	$('.example1').typeIt({
		strings: 'Вторая строчка.',
		speed: 200,
		autoStart: false
	});
	//=================================
	$('.example2').typeIt({
		strings: ["This is a great string.", "But here is a better one."],
		speed: 50,
		breakLines: false,
		autoStart: false
	});
	//=================================
	$('.example3').typeIt({
		strings: ["This is a great string.", "And here we have another great string.."],
		speed: 50,
		autoStart: false
	});
	//=================================

	$('.example4').typeIt({
			speed: 50,
			autoStart: false
		})
		.tiType('Wll')
		.tiPause(500)
		.tiDelete(2)
		.tiType('ell, ')
		.tiPause(1000)
		.tiType('I guess I\'m typing..')
		.tiBreak().tiPause(750)
		.tiType(' but I don\'t really know what to say')
		.tiSettings({
			speed: 700
		})
		.tiType('...')
		.tiPause(750)
		.tiSettings({
			speed: 50
		})
		.tiDelete()
		.tiType('IS THAT SO <strong>WRONG??</strong>');



});
