// Dado el siguiente javascript usa forof para recorrer el array de películas, genera un nuevo array con las categorías de las películas e imprime por consola el array de categorías. Ten en cuenta que las categorías no deberían repetirse. Para filtrar las categorías puedes ayudarte de la función .includes()

const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

// tenemos que recorrer el array y bucear en él hasta llegar a las categories. Como es un array, usamos un for of 

let newArray = [];

for (const movie of movies) {
    // console.log(movie.categories) // Hemos creado una constante con cada película y de ahí podemos acceder a las categories de forma anidada.
    
    // El problema es que los datos salen en forma de distintos arrays, cuando lo que queremos es que sea un único array con todas las categorías. No podemos usar
    // el método de concatenar porque son arrays dentro de un mismo objeto. No se diferencian entre sí por así decirlo.
    
    // Hay que tener en cuenta que categories es otro array, podemos recorrerlo para ver hay dentro con otro for of.


    for (const category of movie.categories) {
        // console.log(category, typeof category) 
        // Ahora sí, vemos los resultados en forma de texto y no en arrays diferentes. Ahora, tenemos que "empujar" estos valores en el array category

        
        // console.log(newArray) // listo, ya tenemos todos los resultados que se imprimen en un único array.

        // El problema: nos dice que las categorias no deberían repetirse. Por eso, vamos a recorrer el array y utilizar includes.()

        if(!newArray.includes(category)){
            newArray.push(category)
        }
      
       }



    }console.log(newArray)



