function compruebaTexto(texto, caracter) {
    var auxTexto = texto.value
    if (caracter.test(auxTexto)) {
        alert("No se permite este caracter")
        auxTexto = auxTexto.substring(0, auxTexto.length - 1)
        texto.value = auxTexto
        return false
    } else {
        return true
    }
}

function maxCaracteres(texto, maxCaracteres) {

    var auxTexto = texto
    if (texto.length > maxCaracteres) {
        alert("Numero maximo de caracteres alcanzada")
        auxTexto = auxTexto.substring(0, auxTexto.length - 1)
        return false
    } else {
        return true
    }

}

function maxValor(valor, min, max) {
    var auxValor = valor.value
    if (auxValor < min || auxValor > max) {
        alert("Valor no reconocido")
        auxValor = null
        valor.value = auxValor
        return false
    } else {
        return true
    }

}

function comprobar(dato1, dato2) {
    if (dato1 && dato2) {
        return true
    } else {
        return false
    }
}
