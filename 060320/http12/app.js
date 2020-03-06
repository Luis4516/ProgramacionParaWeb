//npm init -y
//npm i request

const request = require('request');
var fahrenheitToCelsius = require('fahrenheit-to-celsius'); 

const url = 'https://api.darksky.net/forecast/1e67b33d45c81f81b046f953cdc004ec/19.2433,-103.725?lang=es'; //se cambió a español

/*
request({ url }, (error, response) => { //Object literal (si se llaman igual solo se deja uno), y callback con parametros error y response
    console.log(response); //Es impotante validar contra el error
});
*/

//Analizando la cadena de texto del boddy

request({url, json: true}, (error, response) => {
    const data = response.body;
    console.log("La temperatura es de: " + Math.trunc(fahrenheitToCelsius((data.currently.temperature))) + "°C");
    JSON.stringify(console.log(response.body.daily.data[0].summary + ' Este es el resumen de hoy')); //Conversión a Celsius
});

