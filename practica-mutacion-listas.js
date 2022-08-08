let compra=["Carne","Cafe","mantequilla","azucar","arroz"]


//_-_*Metodos para insertar datos*_-_
//push es para mutar la lista al final de la lista
compra.push("Aceite de Girasol")
//unshift es para mutar la lista al principio de la lista
compra.unshift(3)
//_-_*Metodos para eliminar datos*_-_
//pop es para eliminar valores al final de la lista
compra.pop()
//shift es para eliminar valores al principio
compra.shift()
//splice es el metodo para modificar un elemento del array
//dependiendo el indice que se le dé, y si se desea despues el elemento que se va a a añadir ejemplo:
//compra.splice(indice,cantidad de elemento a eliminar,elemnto a adicionar)
compra.splice(0,1)

console.log(compra)