class Node {
    constructor(value){
        this.value =value;
        this.next = null;
    };
};

class MyQueue {
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;

    };

    //Para consultar el valor del primer elemento
    front(){
        return this.first;
    };
    //Consulta el valor del ultimo elemento de la cola

    back(){
        return this.last;
    };

    //Verificar que la cola esta vacia y debe regresar True o false

    isEmpty(){

    };

    //Este metodo desencola o quita un elemento del principio

    dequeue() {

    };





    //Agrega un elemento al final de la fila

    enqueue(valor){
        const newNode = new Node(value);
        if(this.length === 0) {
            this.first = newNode;
            this,last = newNode;


        }else{
            this.last.next = newNode;
            this.last = newNode;

        };
        this.length++;
        return


    };
};

const myQueue = new MyQueue();
//console.log(myQueue.front());
MyQueue.enqueue("Daniel");
MyQueue.enqueue("Alicia");
MyQueue.enqueue("Alma");

console.log(myQueue);