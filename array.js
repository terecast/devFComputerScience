//ABSTRACCION
//Indices,Datos,Longitud

class MyArray {
    constructor () {
        this.length = 0
        this.data = {}
    }
    //obtener un elemento dada una posicion 
    get(index){
        return this.data[index]
    }
    //Agregar un elemento al final del arreglo
    push(item){
        this.data[this.length]= item
        this.length++
        return this.data

    }
    //Eliminar el ultimo elemento
    pop(){
        const LastItem = this.data[this.length - 1]
        delete this.data[this.length - 1]
        this.length--
        return LastItem
    }
    //Añadir un elemento al principio
    unshift(item) {
        //acceder al ultimo elemento 
        const lastItem = this.data[this.length - 1]

        //recorrer los valores del ultimo y primer elemento
        for(let i = 0; i<= this.length - 1; i++){
            this.data[i + 1] = this.data[i]
        }
        //Una vez que se recorrieron los idices toca Actualizar los valore del ultimo y el primer elemento
        this.data[this.length] = lastItem
        this.data[0] = item

        //Actualizar la cantidad de elementos en mi lista y retornar el valor que acabo de agregar
        this.length++
        return item
    }
}

const list = new MyArray ()
list.push("Pedro")
list.push("Alma")
list.pop()
list.unshift("Maria")


console.log (list.get(1))
console.log (list)