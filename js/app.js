var contenedor = document.getElementById('contenedor');
//crear elementos para el primer cuadro
var cuadroX = document.createElement('div');
var cuadro2 = document.createElement('div');
var cuadro1 = document.createElement('div');
//crear elementos para el segundo Cuadro
var cuadro_a = document.createElement('div');
var cuadro_b = document.createElement('div');
var cuadro_c = document.createElement('div');
//estilos de cuadro_a
cuadro_a.style.position = "relative";
cuadro_a.style.width ='250px';
cuadro_a.style.height = '250px';
cuadro_a.style.background = 'blue';
cuadro_a.style.top = '100px';
cuadro_a.style.left = '130px';
//estilos de cuadro b
cuadro_b.style.position = "absolute";
cuadro_b.style.width ='100px';
cuadro_b.style.height = '100px';
cuadro_b.style.background = 'green';
cuadro_b.style.top = '70px';
cuadro_b.style.left = '75px';
//estilos de cuadro c
cuadro_c.style.position = 'relative';
cuadro_c.style.width = '75px';
cuadro_c.style.height = '70px';
cuadro_c.style.background = 'black';
//estilos de cuadroX
cuadroX.style.position = "relative";
cuadroX.style.width ='250px';
cuadroX.style.height = '250px';
cuadroX.style.background = 'red';
cuadroX.style.top = '50px';
cuadroX.style.left = '130px';
//estilos de cuadro2
cuadro2.style.position = "absolute";
cuadro2.style.width ='100px';
cuadro2.style.height = '100px';
cuadro2.style.background = 'purple';
cuadro2.style.top = '70px';
cuadro2.style.left = '75px';
//estilos cuadro 1
cuadro1.style.position = 'absolute';
cuadro1.style.width = '30px';
cuadro1.style.height = '30px';
cuadro1.style.background = 'yellow';


//agregar elementos
contenedor.appendChild(cuadroX);
contenedor.appendChild(cuadro_a);
cuadroX.appendChild(cuadro2);
cuadro2.appendChild(cuadro1);
cuadro_a.appendChild(cuadro_b);
cuadro_a.appendChild(cuadro_c);