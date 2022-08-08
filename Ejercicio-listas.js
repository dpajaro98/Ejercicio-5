// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
let compra=["Carne","Cafe","mantequilla","azucar","arroz"]
// - Modifica la lista de la compra y añádele "Aceite de Girasol"
compra.push("Aceite de Girasol")
// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
compra.pop()
// - Una lista de tus 3 películas favoritas
// (objetos con propiedades: titulo, director, fecha)
let peliculas=[
    {
    titulo:"transformers",
    director:"steven spielberg",
    fecha:new Date(1,2,2007)    
},
{
    titulo:"Avengers",
    director:"Kevin feige",
    año:new Date(1,3,2012)
},
{
    titulo:"Thor Ragnarok",
    director:"Taika waititi",
    año:new Date(1,2,2016)
}
]
// - Una nueva lista que contenga las películas posteriores 
//al 1 de enero de 2010 (utilizando filter)
let nuevalistapelis=peliculas.filter(y=>y.año>=new Date(1,1,2010))
// - Una nueva lista que contenga los directores de la lista de películas
// original (utilizando map)
let directores=peliculas.map(pelicula=>{
    return pelicula.director
})
// - Una nueva lista que contenga los títulos 
//de la lista de películas original (utilizando map)
let titulos=peliculas.map(pelicula=>{
    return pelicula.titulo
})
// - Una nueva lista que concatene 
//la lista de directores y la lista de los títulos (utilizando concat)
let dir_tit=directores.concat(titulos)
// - Una nueva lista que concatene la 
//lista de directores y la 
//lista de los títulos (utilizando el factor de propagación)
let dir_tit2=[...directores, ...titulos]






//_-_*Metodos para insertar datos*_-_
//push es para mutar la lista al final de la lista

//unshift es para mutar la lista al principio de la lista
compra.unshift(3)
//_-_*Metodos para eliminar datos*_-_
//pop es para eliminar valores al final de la lista
compra



//shift es para eliminar valores al principio

console.log(compra)