//Crear una clase Bebida que herede a dos clases Cerveza
//y Refresco. Ambas clases deben tener la propiedad
//cantidad (ml). La clase Refresco debe tener el atributo
//azucar(g) y la clase Cerveza debe tener el atributo
//porcentajeAlcohol(%) (Tarea)








class Bebida{
    constructor(cantidad, porcentaje, marca){
        this.cantidad = cantidad;
        this.porcentaje = porcentaje;
        this.marca = marca

    }


}
class Refresco extends Bebida{
    constructor (cantidad, marca){
        super(cantidad, marca)
        this.azucar= "azucar";

    }
}

class Cerveza extends Bebida{
    constructor (porcentaje,marca){
        super (porcentaje);
        this.alcohol = porcentaje
    }

}
const objeto = new Bebida ("300 ml")
const pepsi = new Refresco("800ml");
const heineken = new Cerveza ("450", "10%")
