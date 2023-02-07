 
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

/** PARA QUE SE CIERRE Y ABRA EL MENU DE NAVEGACION */
const checkbtn = document.querySelector(".checkbtn")
const nav = document.querySelector(".nav-menu")

checkbtn.addEventListener("click", () => {
	nav.classList.toggle("menu-visible");
})

/** PARA CUANDO CLICKEN EN LOS LINKS, EL MENU SE CIERRE AUTOMATICAMENTE */
const menuLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

menuLinks.forEach(menuLink =>{
	menuLink.addEventListener("click", function(){
		nav.classList.remove("menu-visible");
	})
})

