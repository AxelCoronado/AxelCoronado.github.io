/*
    Alumno: Axel Ricardo Coronado Sánchez
    Fecha: 15/10/2023
*/
"use strict";
var recibe = document.getElementById("recibir"),
	limpiar = document.getElementById("limpiar");

var total = null;
var operacionActual = '';

limpiar.onclick = function () { recibe.value = ""; };

function sendCero() { document.getElementById("recibir").value += document.getElementById("cero").innerHTML; }
function sendUno() { document.getElementById("recibir").value += document.getElementById("uno").innerHTML; }
function sendDos() { document.getElementById("recibir").value += document.getElementById("dos").innerHTML; }
function sendTres() { document.getElementById("recibir").value += document.getElementById("tres").innerHTML; }
function sendCuatro() { document.getElementById("recibir").value += document.getElementById("cuatro").innerHTML; }
function sendCinco() { document.getElementById("recibir").value += document.getElementById("cinco").innerHTML; }
function sendSeis() { document.getElementById("recibir").value += document.getElementById("seis").innerHTML; }
function sendSiete() { document.getElementById("recibir").value += document.getElementById("siete").innerHTML; }
function sendOcho() { document.getElementById("recibir").value += document.getElementById("ocho").innerHTML; }
function sendNueve() { document.getElementById("recibir").value += document.getElementById("nueve").innerHTML; }
function sendPunto() { document.getElementById("recibir").value += document.getElementById("punto").innerHTML; }

function operacion(op) {  
	var num = document.getElementById("recibir").value;

	if (total === null) {
		total = Number(num);
	} else if (operacionActual === 'sumar') {
		total += Number(num);
	} else if (operacionActual === 'restar') {
		total -= Number(num);
	} else if (operacionActual === 'multiplicar') {
		total *= Number(num);
	} else if (operacionActual === 'dividir') {
		total /= Number(num);
	}
	
	operacionActual = op;
	document.getElementById("recibir").value = '';
}

function calcular() {
	var num = document.getElementById("recibir").value;
	
	if (operacionActual === 'sumar') {
	  total += Number(num);
	} else if (operacionActual === 'restar') {
	  total -= Number(num);
	} else if (operacionActual === 'multiplicar') {
	  total *= Number(num);
	} else if (operacionActual === 'dividir') {
	  total /= Number(num);
	}
	
	/*document.getElementById("recibir").innerHTML = 'El resultado es: ' + total;*/
  	document.getElementById("recibir").value = total;
	total = null;
  }