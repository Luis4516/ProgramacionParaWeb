/*
let app = express();
app.get('/users', (res,req)=>{
    resend('Hola');
});
applisten(3000);

localhost:3000/users

system events
custom events
*/

//MEtodos de acceso al keypair
var obj = {
    greet: 'Hello',
    greetr: function () {
        console.log('Hola funcion');
    }
}

console.log(obj.greet);
console.log(obj['greet']);
var prop = 'greet';
console.log(obj[prop]);

var click = 'greetr';
obj[click]();

var arr = [];
arr.push(function() {
    console.log('Hola mundo 1');
});
arr.push(function() {
    console.log('Hola mundo 2');
});
arr.push(function() {
    console.log('Hola mundo 3');
});

arr.forEach(function(item) {
    item();
});
