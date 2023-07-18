function helloWorld(){
    alert("Hello World")
}

/*
    VAR = Escopo Global
    LET = Escopo Local
    CONST = Constate - Escopo Global
*/

let nome = document.getElementById("nome")
// let nome = <input id="nome" type="text" name="nome">

function enviar(){
    alert("Olá " + nome.value)
}