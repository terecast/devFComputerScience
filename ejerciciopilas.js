let stack = new Stack();
stack.push('Manzana')
stack.push('Cebolla')
stack.push('Apio')
stack.push('Naranja')
stack.push('Papaya')
stack.push('Sandia')
stack.push('Melon')


function ultimosElementos(pila, num){

    let aux = new Stack();

    for(let i = 0; i<num; i++){
        
        const x = pila.pop();
        aux.push(x);
        console.log(x);
    }

}