/*
function greet(){
    console.log('hi');
}
greet();
*/

//Funciones de primera clase
/*let greet = () => {
    console.log('hi2'); 
}
//Eliminé greet();

let logGreeting = (fn) => {
    fn();
}
logGreeting(greet);
*/

let name = (()=>{
    console.log('hi');
});
name();