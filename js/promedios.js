let actividades = [
    { id: 1, nombre: 'Actividad 1', nota: 0 },
    { id: 2, nombre: 'Actividad 2', nota: 1.5 },
    { id: 3, nombre: 'Actividad 3', nota: 5 }
];
function mostrarMensaje(promedio) {
    let mensaje = promedio >= 3 ?
        'Felicitaciones aprobó' :
        'Lo sentimos vuelva a repetir la materia';
    document.getElementById('mensajeNota').innerText = mensaje;
}

function mostrarActividades() {
    let filas = '';
    let sumatoria = 0;
    for (let actividad of actividades) {
        //concatenar datos
        filas += '<tr>';
        filas += '  <td> ' + actividad.id + '</td>';
        filas += '  <td> ' + actividad.nombre + '</td>';
        filas += '  <td> ' + actividad.nota + '</td>';
        filas += '  <td>';
        filas += '      <button>Modificar</button>';
        filas += '      <button>Eliminar</button>';
        filas += '  </td>';
        filas += '</tr>';
        sumatoria += actividad.nota;
    }
    let promedio = sumatoria / actividades.length;
    document.getElementById('promediosTb')
        .getElementsByTagName('tbody')[0]
        .innerHTML = filas; //inertex imprime un  texto innerHTML va a renderizar todo el elemnto HTML
    document.getElementById('promedioText')
        .innerText = 'Su promedio es :' + promedio;
    mostrarMensaje()
}
mostrarActividades();
