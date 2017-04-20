var contenedor = document.getElementById('contenedor');
var	mostrar = document.getElementById('mostrar');
//funcion para crear los cuadrados
var mostrarCuadro = function(color,tamano,altura,leftValor,posicion,top) {
	var cuadro = document.createElement('div');
	cuadro.style.width = tamano;
	cuadro.style.height = altura;
	cuadro.style.background = color;
	cuadro.style.left = leftValor;
	cuadro.style.position =posicion;
	cuadro.style.top = top;
	contenedor.appendChild(cuadro);
}
//otro cuadro

mostrarCuadro("red","200px","200px","150px","relative","50px");
mostrarCuadro("purple","100px","100px","200px","absolute","100px");
mostrarCuadro("yellow","50px","50px","200px","absolute","100px");

//segundo cuadro
mostrarCuadro("blue","200px","200px","150px","relative","80px");
mostrarCuadro("green","100px","100px","200px","absolute","330px");
mostrarCuadro("black","50px","50px","150px","absolute","280px");









