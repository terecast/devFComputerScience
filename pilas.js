class Stack {
    constructor(){
        this.items=[]
    }
    //Ubica un nuevo valor a la pila colocandolo al final//
    empujar(item){
        this.items.push(item);

    }
    //El metodo POP trae el ultimo objeto de un arreglo y eliminarlo//
    pop(){
        return this.items.pop();
    }

    //El metodo Peek retorna el ultimo valor agregado a la pila sin sacarlo de la pila//
    peek(){
        return this.items[this.items.length - 1]
    }
    //retorna el numero de elementos en una pila//
    size(){
        return this.items.length
    }
    //Muestra el contenido de la pila//
    print(){
        console.log(this.items)
    }


}
