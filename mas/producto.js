`user strict`;
// INPUTS-AGREGAR
const input = document.querySelector(`.producto`);
const btnAgragar = document.querySelector(`.btn-agregar`);
// INPUTS CHECKBOX
const hardware = document.querySelector(`.hardware`);
const insumos = document.querySelector(`.insumos`);
const notebooks = document.querySelector(`.notebooks`);
const servicios = document.querySelector(`.servicios`);
//INPUT SELECT SUB-CETAGORIA
const subHard = document.querySelector(`.sub-cate-hard`);
const subInsu = document.querySelector(`.sub-cate-insu`);
const subServ = document.querySelector(`.sub-cate-serv`);
//INPUT PRECIO PODUCTO
const prLista = document.querySelector(`.lista`);
const prContado = document.querySelector(`.contado`);
//LISTA DE PRODUCTOS
const listaProd = document.querySelector(`.listaProd`);

//OBJETO PRODUCTO
const prod={
	texto:'',
	cat:'',
	subCat:'',
	prLis:'',
	prCon:'',
	key:''
}
// fragemnto de documento
let fragment = document.createDocumentFragment();
//contador para generar keys en caso de eliminar
let cont = 1;

 // OBTENER TEXTO PRODUCTO
let txt = (e)=>{
	prod.texto= e.target.value;

}
input.addEventListener(`change`,txt);

//OBTEBER CATEGORIA PREDUCTO
let checked = (e)=>{
	if (e.target.checked) {
		prod.cat = e.target.value;
	}else{
		prod.cat = '';
	}
}
hardware.addEventListener(`click`,checked);
insumos.addEventListener(`click`,checked);
notebooks.addEventListener(`click`,checked);
servicios.addEventListener(`click`,checked);


// OBTENER SUB CATERGORIA
let select = (e)=>{
	if (e.target.attributes.form.value === prod.cat) {
		prod.subCat = e.target.value;
		sca = e.target.value;
}else{
	alert("No coinciden categoria y su-categoria");
}
}
subHard.addEventListener(`change`,select);
subInsu.addEventListener(`change`,select);
subServ.addEventListener(`change`,select);


//OBTENER PRECIO
//precio lista
let precioLis = (e)=>{
	prod.prLis = e.target.value;
}
prLista.addEventListener(`change`,precioLis);
//precio contado
let precioCont = (e)=>{
	prod.prCon = e.target.value;
}
prContado.addEventListener(`change`,precioCont);

//CREACION LISTA PRODUCTO
let agregar = (tx,ca,pl,pc,id)=>{
	//crear elementos
	let elemento = document.createElement("DIV");
	let text = document.createElement("H4");
	let cate= document.createElement("H4");
	let preL = document.createElement("H4");
	let preC = document.createElement("H4");
	// iconos #$@@$#$%!!@// 
	let iconContent = document.createElement("DIV");
	let iconActualizar = document.createElement("IMG");
	let iconConfirm = document.createElement("img");
	let iconTacho = document.createElement("IMG");

// icono actualizar 
iconActualizar.setAttribute(`src`,`../imagenes/icon-actualizar.svg`);
iconActualizar.setAttribute(`alt`,`icon-actualizar`);
iconActualizar.setAttribute(`title`,`actualizar`);
iconActualizar.classList.add("icon","actualizar");

// icono confirmar
iconConfirm.setAttribute(`src`,`../imagenes/icon-confirm.svg`);
iconConfirm.setAttribute(`atl`,`icon-confirm`);
iconConfirm.setAttribute(`title`,`confirmar`);
iconConfirm.classList.add("icon","confirm");
// icono delete 
	iconTacho.setAttribute(`src`,`../imagenes/icon-delete-tacho.svg`);
	iconTacho.setAttribute(`alt`,`icon-delete`);
	iconTacho.setAttribute(`title`,`delete`);
	iconTacho.classList.add("icon","delete");

// contenedor de iconos !@!#$%&%&%&//
iconContent.classList.add("articulo")
iconContent.appendChild(iconActualizar);
iconContent.appendChild(iconConfirm);
iconContent.appendChild(iconTacho);

	//agregar clases a los elementos
	elemento.classList.add("elemento");
	text.classList.add("articulo","art-text");
	cate.classList.add("articulo");
	// titulo subcate
	cate.setAttribute(`title`,sca);
	preL.classList.add("articulo");
	preC.classList.add("articulo");
	//agregar contenidoa los elementos 
	text.innerHTML=tx;
	cate.innerHTML = ca;
	preL.innerHTML= `$ ${pl}`;
	preC.innerHTML= `$ ${pc}`;

	//añadir elementos al fragmento
	elemento.setAttribute("id",id)
  elemento.appendChild(text);
  elemento.appendChild(cate);
	elemento.appendChild(preL);
	elemento.appendChild(preC);
	elemento.appendChild(iconContent);

	fragment.appendChild(elemento);
}

// @$!#!#!$!@1  CRUD PRODUCTOS AGREGADOS %^&@$@#$@$@$@#$#$%#$#$%// 

// CREACION DE LISTA DE PRODUCTOS
let mostrarProd = async()=>{
	prod.key = await cont++;
	let tx = await prod.texto;
  let ca = await prod.cat;
  let sca = await prod.subCat;
  let pl = await prod.prLis;
  let pc = await prod.prCon;
  let id = await prod.key;
  agregar(tx,ca,pl,pc,id);
	listaProd.appendChild(fragment);
}
// !@#$#%&&*() AGREGAR PRODUCTOS !@#$%^&*^&*()@#% //
btnAgragar.addEventListener(`click`,async(a)=>{
	try{
		let mos = await mostrarProd();
		//  reestabelcer valores //
		if (mostrarProd) {
			input.value=``
			hardware.checked= false;
			insumos.checked=false;
			servicios.checked=false;
			notebooks.checked=false;
			prLista.value=``;
			prContado.value=``;
			subHard.value=``;
      subInsu.value=``;
      subServ.value=``;
      actualizarPord();
		}
	a.preventDefault();
	}
	catch{
		alert(`Ha ocurido un error!...
			     por favor comuniquese con el desarrollador.`);
		a.preventDefault();
	}	
});
const actualizarPord = async()=>{
	const actualizar = document.querySelector(`.actualizar`)
	.addEventListener(`click`,()=>{
		console.log("actualizar");
});
}

// WEB WORKER /#%#$%$&^%%*%*//
let worker1 =  new Worker("worker.js");
 worker1.addEventListener("message",()=>{
 	console.log("web worker activo");
 });
 worker1.posMessage("hola");