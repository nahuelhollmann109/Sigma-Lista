"user strict";
const icono = document.querySelector(".icono-menu");
icono.addEventListener("click",()=>{
	const menu = document.querySelector(".menu-content");
	if (menu.classList.contains("menudown")) {
		menu.style.animationName = "plegar";
		menu.style.animationDuration = ".6s"
		menu.style.animationFillMode = "forwards"
		menu.classList.remove("menudown");
	} else{
	menu.style.display = "block";
	menu.style.animationName = "desplegar";
	menu.style.animationDuration = ".6s"
	menu.style.animationFillMode = "forwards"
	menu.classList.add("menudown");
	}
});
const mq =matchMedia("max-width:820px");
mq.addEventListener("change", ()=>{
document.getElementByID("iconHome").delete();
})