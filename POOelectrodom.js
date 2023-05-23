//Queremos saber que Electrodomestico consume más energía. Crea una superclase llamada Electrodoméstico con las
  //  siguientes características: (Grupo)
  //  a. Sus atributos son precio, color, consumoEnergetico
 //   b. El constructor solo debe pedir precio, color
 //      y capacidad.
  //  c. consumoEnergetico por default debe ser 100
//Crea una subclase de Electrodomestico llamada Lavadora
//    con las siguientes características: (Clase)
  //  a. Su atributo es carga(kg de ropa), además de los
 //      atributos heredados.
//    b. Crea el método consumoFinal(). Este se calcula
 //      multiplicando el consumoEnergetico, (que se pasa por parametro) por la carga.

const consumoEnergetico = 100

class Electrodomestico{
    constructor(precio, color, capacidad){
        this.grupo = precio
        this.color = color
        this.capacidad = capacidad
        

    }

}

class Lavadora extends Electrodomestico{
    constructor(precio, color, capacidad, carga){
        super (precio, color, capacidad)
        this.carga = carga

    }

    consumoFinal(){
        return consumoEnergetico*this.carga
    }
    
}


const lavadora = new Electrodomestico (5000, "Blanco", 17, 5);



