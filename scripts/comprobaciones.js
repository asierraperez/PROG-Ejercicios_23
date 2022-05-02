function compruebaTexto(texto, caracter) {
    var auxTexto = texto
    if (caracter.test(auxTexto)) {
        alert("No se permite este caracter")
        auxTexto = auxTexto.substring(0, auxTexto.length - 1)
    }
    return auxTexto
}

function maxCaracteres(texto, maxCaracteres) {

    var auxTexto = texto
    if (texto.length > maxCaracteres) {
        alert("Numero maximo de caracteres alcanzada")
        auxTexto = auxTexto.substring(0, auxTexto.length - 1)
    }
    return auxTexto
}

function maxValor(valor, min, max) {
    var auxValor = valor
    if (auxValor < min || valor > max) {
        alert("Valor no reconocido")
        auxValor = null
    }
    return auxValor
}