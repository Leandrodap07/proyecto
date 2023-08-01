let name = prompt('Cual es tu nombre?');
let age = prompt('Cual es tu edad?');
 
const currentDate = new Date();
const year = currentDate.getFullYear() - Number(age);
 
document.getElementById('content').innerHTML = `<h2>Bienvenido ${name} de ${age} años.<h2/><h3>Naciste el año ${year}.</h3>`;