
// programa para mostrar objetos en este caso programas de TV
 /*
let nombre = "Tanjiro";
let anime = "Demon Slayer";
let edad = 16; 
*/
let personaje = {

    nombre: "Tanjiro",
    anime: "Deamon Slayer",
    edad: 16,
};
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);

personaje.edad = 13;

personaje['edad'] = 15;

delete personaje.anime;

console.log(personaje);