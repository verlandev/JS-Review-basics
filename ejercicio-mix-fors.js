// Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.

const users = [
  {
    name: "Manolo el del bombo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Mortadelo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Super Lopez",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "El culebra",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

// console.log("Esta es la primera capa del array", users)

// users es un array y dentro contiene 3 objetos. 
// La primera capa: objeto con name + favoriteSounds. 
        // favoriteSounds es un objeto y dentro contiene variables que también son un objeto
// Si hablamos de capa, la primera capa para recorrer un array sería un for of. 
// La segunda capa para recorrer un objeto sería un for in


let count = 0; 
let sumVolume = 0;


for (const object of users) {

  // console.log("Este es el objeto que está dentro de mi array", object.favoritesSounds);

  

  for (const key in object.favoritesSounds) {
    
    // console.log("Estos son los diferentes volumenes de favoriteSounds", object.favoritesSounds[key].volume);
    // console.log(key)
    const volume = object.favoritesSounds[key].volume; 
    console.log(volume)
    // creo esta variable para no liarme
    // console.log("Este es un volumen de la propiedad favoriteSounds ", volume)
    
    // lo que quiero es sumar todas las propiedades de volumen, pero no sé cuántas propiedades hay en total, tengo que sacarlas. 
    // Por eso, hay que crear una variable que nos permita contar cuantas veces se repite la propiedad: let count = 0 que vamos a colocar fuera de los bucles para que no se reinicie cuando reinicie el bucle.

    count++; // le estamos pidiendo que a 0 le sumes 1 cada vez que el bucle de volume de la vuelta

    // console.log(count) // imprime 12. Es decir 12 valores para volumen. Ahora sí, podemos sacar la media.

    sumVolume = sumVolume + volume;
    
    

     


    }
}
console.log(sumVolume/count) // Imprime 57,25
  


