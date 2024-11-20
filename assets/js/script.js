let listaNombresGastos = [];
let listaValoresGastos = [];

/*
Está función se invoca al momento en que el usiario da click al botón:
"Agregar Gasto"
*/
function clickBoton() {
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;

    console.log("Nombre del gasto:", nombreGasto);
    console.log("Valor del gasto:", valorGasto);

    listaNombresGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);
    
    console.log(listaNombresGastos);
    console.log(listaValoresGastos);


    alert(`Gasto agregado: ${nombreGasto}, Valor: ${valorGasto}`);

    actualizarListaGastos();
}

function actualizarListaGastos(){
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');

    let htmlLista = '';
    let htmlValores = '';
    let totalGastos = 0;

    listaNombresGastos.forEach((elemento, posicion) => {
        const valorGasto = Number(listaValoresGastos[posicion]);
        htmlLista += `<li> ${elemento} - USD ${valorGasto}
         <button onclick="eliminarGasto(${posicion});">Quitar elemento</button>
        </li>`; 

        //Calculamos el total de gastos
        totalGastos += Number(valorGasto);
        console.log(totalGastos);

    });

    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);

    console.log(htmlLista);

    limpiarElementos();

}

function limpiarElementos(){
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';   
}

function eliminarGasto(posicion){
    listaNombresGastos.splice(posicion,1);
    listaValoresGastos.splice(posicion,1);
    actualizarListaGastos();
}