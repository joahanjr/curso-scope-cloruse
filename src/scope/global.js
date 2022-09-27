/* variables */

var a; /* estamos declarando la variable */
/*  a = 1  así se inicializa una variable
pero normalmente se hace de la siguiente forma*/
var b = "b"; /* aqui estamos declarando y inicializando la variable */
b = "bb" /* así se reinicializ O se reasigna */
var a = "aa" /* redeclaramos la variable */

//Globla Scope
var fruit = "Apple"; // estamos declarando y inicializando la variable en el scope global
console.log(fruit); // imprimimos la variable

function bestfruit (){
    console.log(fruit); // hacemos una funcion para imprimir la variable ya que esta en un scope global
}
bestfruit();

function countries (){
    country = "Mexico"; //estamos inicializando una variable pero como no la estamos declarando se convierte en una variable con un scope global
    console.log(country);
}

countries();
console.log(country); // llamamos la variable que no declaramos y se imprime