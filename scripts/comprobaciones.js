function compruebaTexto(texto, caracter) {
    var auxTexto = texto.value
    var error = false
    for (let i = 0; i < auxTexto.length; i++) {
        if (caracter.test(auxTexto[i])) {
            error = true
        }
    }
    if (error) {
        alert("No se permite este caracter")
        auxTexto = null
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
        auxTexto = auxTexto.substring(0, 24)
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
