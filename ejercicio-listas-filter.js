let peliculas=[
    {
    titulo:"transformers",
    director:"steven spielberg",
    fecha:2007    
},
{
    titulo:"Avengers",
    director:"Kevin feige",
    fecha:2012
},
{
    titulo:"Thor Ragnarok",
    director:"Taika waititi",
    fecha:2017
}
]
// - Una nueva lista que contenga las películas posteriores 
//al 1 de enero de 2010 (utilizando filter)
let nuevalistapelis=peliculas.filter(y=>y.fecha>=2010)
console.log(nuevalistapelis)