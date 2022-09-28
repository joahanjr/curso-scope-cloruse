//var
var firstName; // cuando solo se declara una variable se le da un valor de undefined
firstName = "joahan"; // estamos inicializando una variable, es decir, dandole un valor
console.log(firstName); // estamos invocando esta variable

var lastName = "jimenez";
lastName = "ramirez"; //re-inicializamos una variable, es decir, le cambiamos el valor
console.log(lastName);

var secondName = "gustavo"; //declarando y inicializando
var secondName = "diego"; // re-inicializando
console.log(secondName); 

//let
let fruit = "apple"; //declarando y inicializando
fruit = "kiwi"; // re-inicializar
/* let fruit = "banana" //no se puede re-declarar ni re-inicializar*/

//const
/* const animal = "perro"; // se declara y se inicializa
animal = "gato"; // no se puede re-inicializar
const animal = "dog"; // no se puede re-declarar ni re-inicializar
console.log(animal); */


const vehicles = [];
vehicles.push("🏎");
console.log(vehicles);
vehicles.pop("🏎");
console.log(vehicles);

/* // Con var
var nombre // declaración (undefined) ✅
nombre = "Andres" // asignación ✅
nombre = "Valeria" // reasignación ✅
var nombre = "Oscar" // redeclaración y reasignación ✅

// Con let
let nombre // declaración (undefined) ✅
nombre = "Andres" // asignación ✅
nombre = "Valeria" // reasignación ✅
let nombre = "Oscar" // SyntaxError: Identifier 'nombre' has already been declared. ❌

// Con const 
const nombre // SyntaxError: Missing initializer in const declaration. ❌
const nombre = "Andres" // declaración y asignación ✅
nombre = "Valeria" // TypeError: Assignment to constant variable. ❌
const nombre = "Oscar" // SyntaxError: Identifier 'nombre' has already been declared. ❌ */