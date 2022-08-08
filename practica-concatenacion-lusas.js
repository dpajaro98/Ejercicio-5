let lista1=[1,"saludo",0.5,"simp"]
let lista2=[2,"hola","1/2","si claro"]

//metodo concat para concatenar listas=lista.concat(lista a concatenar)
let concatlistas=lista1.concat(lista2)
console.log(concatlistas)

//usando el factor de propagacion
let var2=[...lista1, ...lista2]
console.log(var2)

//sacar otra lista a partir de una ya hecha, se usa slice y
// desde donde se quiere tomar la nueva lista:
// lista.slice(indice de donde empieza la nueva lista)
let listaslice=lista1.slice(1)
console.log(listaslice)

