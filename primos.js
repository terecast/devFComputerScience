
function primos(){
    let numero = 3;
    if (numero >= 2){
        for (let i= 2; i < numero; i++) {
            if (numero % i == 0) {
                console.log(numero + " No es primo");
                return;
                   
            }
    
        }
        console.log(numero + " Es primo");   
    
    
    }else{
        console.log(" Solo permito numero mayores a 2")
    }

}
primos();

    