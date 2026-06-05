// Archivo preparado para ejecutarse con Node.js

const who = ["Mi perro", "Mi abuela", "El vecino", "Un extraterrestre"];
const action = ["se comio", "rompio", "escondio", "borro"];
const what = ["mi tarea", "mi telefono", "las llaves", "el informe"];
const when = ["hoy", "ayer", "esta manana", "anoche"];

const randomWho = who[Math.floor(Math.random() * who.length)];
const randomAction = action[Math.floor(Math.random() * action.length)];
const randomWhat = what[Math.floor(Math.random() * what.length)];
const randomWhen = when[Math.floor(Math.random() * when.length)];

const excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;

console.log("Excuse generator listo para implementar.");
console.log(excuse);