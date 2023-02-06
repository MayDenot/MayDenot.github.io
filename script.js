 
/** FUNCION QUE, AL SCROLLEAR, AL HEADER LE BRINDA UN BOX-SHADOW */

window.addEventListener('scroll', function (){
    var header = document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY > 0);
})


/** ANIMACION DE TEXTO EN LA PRESENTACION */
const typed = new Typed('.typed',{
    strings: [
        '<b class="soy">historia y amante de la informática.</b>'
    ],
    stringsElement: '#cadenas-texto', 
	typeSpeed: 70, 
	startDelay: 400, 
	backSpeed: 70, 
	smartBackspace: true, 
	shuffle: false, 
	backDelay: 1000, 
	loop: false, 
	showCursor: true, 
	cursorChar: '|', 
	contentType: 'html', 
});

