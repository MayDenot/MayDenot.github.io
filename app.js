
window.addEventListener('scroll', function (){
    var header = document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY > 0);
})

const typed = new Typed('.typed',{
    strings: [
        '<b class="soy">soy profesor de historia y amante de la informática.</b>'
    ],
    stringsElement: '#cadenas-texto', 
	typeSpeed: 70, 
	startDelay: 400, 
	backSpeed: 70, 
	smartBackspace: true, 
	shuffle: false, 
	backDelay: 1500, 
	loop: true, 
	loopCount: false, 
	showCursor: true, 
	cursorChar: '|', 
	contentType: 'html', 
});


$(document).ready(main);

var contador = 1 ;

function main() {
	$('#check').click(function(){
		$('nav').toggle();
	});
};
