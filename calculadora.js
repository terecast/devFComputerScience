class Calculadora{
    constructor(valor1, valor2){
        this.valor1 = valor1;
        this.valor2 = valor2;     
    }
    sumar(){
        return `El resultado de la suma es ${this.valor1 + this.valor2}`
    }
    restar(){
        return `El resultado de la resta es ${this.valor1 - this.valor2}`
    }
    multiplicar(){
        return `El resultado de la multiplicacion es ${this.valor1 * this.valor2}`
    }
    dividir(){
        return `El resultado de la division es ${this.valor1 / this.valor2}`
    }
}

let calculadora = new Calculadora(6,7);

let suma = calculadora.sumar();
console.log(suma);
let resta = calculadora.restar();
console.log(resta);
let multi = calculadora.multiplicar();
console.log(multi);
let div = calculadora.dividir();
console.log(div);