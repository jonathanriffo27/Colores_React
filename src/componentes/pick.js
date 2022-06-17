
function elegido(colores) {
    let random = Math.floor(Math.random() * colores.length);
    return colores[random];
}


export default elegido;