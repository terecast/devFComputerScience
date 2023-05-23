class Student {
    constructor(name, username, classes, address, secretNumber){
        this.name = name
        this._username = username
        this.classes = classes
        this._address = address
        this._secretNumber = secretNumber
    }

    //Getters se usan para obtener una propiedad privada y aplicar logica en ella de modo que no las presentemos de forma directa.

    get getAddress(){
        return this._address
    }

    get getBillingForExam(){
        const biling = this._secretNumber * 2
        return `Estimado ${this.name}, usted tiene que pagar ${billing} para presntar examen`
    }

//si despues queremos modificar el valor de una propiedad privada usamos SETTERS
    set validateUserName(newUserName){
        if (newUserName === "usearioMaldito" || newUserName === "laCucaracha"){
            console.log("no haga eso señor");
        }else{
            this._username = newUserName
            return newUserName
        }
    
    }
}

const emilio = new Student ("Emilio", "Million", ["History", "Math", "Physics"], "Dillion Av, Etc")
console.log (emilio);
console.log(emilio.getAddress);
console.log(emilio.validateUserName = "lacucaracha")