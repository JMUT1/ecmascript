//Parametros por defecto ES6

function newFunction (name= "Oscar", age= 32, country = "MX"){
    console.log(name,age,country);
};

newFunction();
newFunction("Chema", 27, "MX");

// MULTILINEA en ES6

let lorem = `otra frase epica que necesitamos
ahora es otra frase epica`;

console.log(lorem);

//Desestructuración DE ELEMENTOS

let person = {
    "name" : "Oscar",
    "age" : 32,
    "country": "MX",
}

console.log(person.name, person.age);

let {name,age,country} = person;
console.log(name,age,country);

//OPERADOR DE PROPAGACION -- SPREAD OPERATOR

let team1 = ["Oscar", "Chema", "Valeria"];
let team2 = ["Miguel", "Catia", "Roman"];

let education = ["David", ...team1, ...team2];

console.log(education);