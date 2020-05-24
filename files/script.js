//
//
//
//
//
//Clicking Links in the Work Experience area switches Divs
$(document).ready(function () {
	$('#Job1').click(function () {
		console.log('clicked');
		$('.workTIO').css('display', 'block');
		$('.workAP, .workJob3, .workJob4, .workJob5').css('display', 'none');
		$('#Job1').addClass('active');
		$('#Job2, #Job3, #Job4, #Job5').removeClass('active');
	});
	$('#Job2').click(function () {
		$('.workAP').css('display', 'block');
		$('.workTIO, .workJob3, .workJob4, .workJob5').css('display', 'none');
		$('#Job2').addClass('active');
		$('#Job1, #Job3, #Job4, #Job5').removeClass('active');
	});
	$('#Job3').click(function () {
		$('.workJob3').css('display', 'block');
		$('.workTIO, .workAP, .workJob4, .workJob5').css('display', 'none');
		$('#Job3').addClass('active');
		$('#Job1, #Job2, #Job4, #Job5').removeClass('active');
	});
	$('#Job4').click(function () {
		$('.workJob4').css('display', 'block');
		$('.workTIO, .workAP, .workJob3, .workJob5').css('display', 'none');
		$('#Job4').addClass('active');
		$('#Job1, #Job3, #Job3, #Job5').removeClass('active');
	});
	$('#Job5').click(function () {
		$('.workJob5').css('display', 'block');
		$('.workTIO, .workAP, .workJob3, .workJob4').css('display', 'none');
		$('#Job5').addClass('active');
		$('#Job1, #Job3, #Job4, #Job2').removeClass('active');
	});
});

//Functionality to make the Work Expeirence Slider Move
$('.workExpNavLink').click(function () {
	let k = $(this).attr('data-leftvertposition');
	console.log(k);
	$('.vlSelect').animate(
		{
			marginTop: k + 'px',
		},
		300
	);
});
//
//
//
//
//
//
//

//
//
//
//
//
//

//Changes size of slide out contact page

$('#contactBTN').click(function () {
	$('.SideContactBox').css('width', '70%');
});

$('.closeSlider').click(function () {
	$('.SideContactBox').css('width', '0%');
});
