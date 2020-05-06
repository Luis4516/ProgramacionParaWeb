const request = require('request');
const random = require ('random-numbers-generators');
var fahrenheitToCelsius = require('fahrenheit-to-celsius');

const url = 'https://swapi.co/api/people/' + random(80);
request({url, json: true}, (error, response) => {
    const data = response.body;
    var nombre = data.name; //nombre aleatorio
    
    const direccion = require('./address');
    var calle = direccion[random(20)].address.street; //calle aleatoria

const url2 = `http://www.mapquestapi.com/geocoding/v1/address?key=ZfGIAjH7OOIDeaSnyDqSEO8BkexxNwr6&location=Washington,DC`
request({url : url2, json: true}, (error, response) => {
    const data = response.body;
    var latlong = (data.results[0].locations[0].latLng);

    const url3 = `https://api.darksky.net/forecast/1e67b33d45c81f81b046f953cdc004ec/${latlong.lat},${latlong.lng}`
    request({url: url3, json: true}, (error, response) => {
        const data = response.body;
        var temp = Math.trunc(fahrenheitToCelsius(data.currently.temperature)); //temperatura
        console.log(`${nombre} vive en la calle ${calle} y hay una temperatura de ${temp}`);
    });
});
});







