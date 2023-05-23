
function eventoMostrar(sectionMostrar){
    
    //let sections = document.getElementsByClassName("statusDisplayNone");
    document.getElementById("alta").style.display = 'none';
    document.getElementById("lista").style.display = 'none';
    document.getElementById("insc-alumno").style.display = 'none';
    document.getElementById("muestraLista").style.display = 'none';

    document.getElementById(sectionMostrar).style.display = 'flex';

}

let arrayAlumno = [];


function mostrarLista(){
    eventoMostrar('lista');
    lista();
   
}

function altaAlumno(){
    let nombre = document.getElementById("name").value;
    let apellido = document.getElementById("lastname").value;
    let edad = document.getElementById("age").value;
    

    let anew = new Alumno(nombre,apellido,edad);

    arrayAlumno.push(anew);

    document.getElementById("name").value = "";
    document.getElementById("lastname").value ="";
    document.getElementById("age").value ="";


}


function lista(){

    clearTable();
    for(let i=0; i<arrayAlumno.length; i++){
        document.getElementById('tableList').insertRow(-1).innerHTML = '<th scope="row">' + (i + 1) +'</th><td>'+arrayAlumno[i].nombre+'</td><td>'+arrayAlumno[i].apellido+' </td><td>'+arrayAlumno[i].edad+'</td>';
        console.log(lista);
    }
}

function clearTable(){
    
    let rowCount = document.getElementById('tableList').rows.length;
    for(let i=1;i<rowCount;i++){
        document.getElementById('tableList').deleteRow(1);
    }
}

function inscribeAlumnos(){

    eventoMostrar('insc-alumno');
    clearSelect();
    for(let i=0; i<arrayAlumno.length; i++){
        let option = document.createElement("option");
        option.value=i;
        option.text = arrayAlumno[i].nombre+" "+arrayAlumno[i].apellido;
        document.getElementById('a-registrados').add(option);

    }

    
}

function btnInscribe(){

    let alumno = document.getElementById('a-registrados').value;
    let clase = document.getElementById('c-registradas').value;
    let grupo = document.getElementById('g-registrados').value;    


    arrayAlumno[alumno].clases.push(clase);
    arrayAlumno[alumno].grupos.push(grupo);

    document.getElementById('a-registrados').value = "inicio";
    document.getElementById('c-registradas').value = "inicio";
    document.getElementById('g-registrados').value = "inicio";   

    document.getElementById('divAlumnoInscrito').innerText = "Alumno Inscrito Exitosamente!";

   

}

function consultaAlumnosInsc(){
    eventoMostrar('muestraLista');

    clearTable1();
    for(let i=0; i<arrayAlumno.length; i++){
        document.getElementById('table-alumnos').insertRow(-1).innerHTML ='<td>'+arrayAlumno[i].nombre+'</td><td>'+arrayAlumno[i].apellido+' </td><td>'+arrayAlumno[i].clases+' </td><td>'+arrayAlumno[i].grupos+' </td>';
        console.log(consultaAlumnosInsc);
    }


}

function clearTable1(){
    
    let rowCount = document.getElementById('table-alumnos').rows.length;
    for(let i=1;i<rowCount;i++){
        document.getElementById('table-alumnos').deleteRow(1);
    }
}

function clearSelect(){
    let opts = document.getElementById('a-registrados').options.length;
    for(let i=1;i<opts;i++){
        document.getElementById('a-registrados').remove(1);
    }
}








