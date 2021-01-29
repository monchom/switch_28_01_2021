
console.log("Hola");

let key = 1 ;
//let key = "2";

let key = prompt("Ingrese una opcion");
switch (key) {
    case 1:
        console.log(`Opcion uno`);
        break;

    case 2:
        console.log(`Opcion dos`);
        break;  
    
    case "2":
        console.log(`Opcion dos de tipo String`);
        break;
    default:
        console.log(`Opcion incorrecta`);
        break;
}

function saludar(params){

    return `hola ${params}`;
}

let saludar_consola = function(p1){

     return function(){

        return {id: p1}
     };
};

let saludar = saludar_consola("hola");

console.log(saludar);


// Otra vez

function Hola(params){

    return `return ${params}`;
}


let saludar2 = function(params){
    return `return ${params}`;
}

console.log(saludar2("miguel"));

let saludar3 = (params) => {return params}

Array.forEach(element => {
    
});