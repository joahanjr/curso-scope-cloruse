function fruits (){ // un bloque es todo lo que este dentro de {}
    if (true){
        var fruit1 = "apple"; // se le agrega funcion scope
        let fruit2 = "kiwi"; // se le agrega el block scope
        const fruit3 = "banana"; //se le agrega el block scope

        console.log(fruit2); // aqui se ejecutan porque las estamos declarando y inicializando en el mismo scope
        console.log(fruit3); // aqui se ejecutan porque las estamos declarando y inicializando en el mismo scope
    }
    console.log(fruit1);   // como esta declarado con var su scope pasa al que lo contiene en este caso es la funcion
/*     console.log(fruit2); // no se ejecutan por que las variables estan en otro scope
    console.log(fruit3); */ // no se ejecutan por que las variables estan en otro scope
}

fruits();