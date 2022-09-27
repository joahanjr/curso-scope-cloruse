function saludo(){
    let userName = "joahan"; //declaramos y inicializamos nuestra variable en un scope funcion
    console.log(userName); //llamamos a la variable con el console.log
    if (userName === "joahan"){ // estamos haciendo una condición que si user name === a el nombre tiene que imprimir el saludo
        console.log("hello, " + userName); // hacemos el saludo y concadenamos la variable
    }
}
saludo(); 
console.log(userName); // estamos llamando la variable fuera de su scope, por lo tanto nos sale un error