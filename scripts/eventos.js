function eventoNombre(nombreHTML, valores, btnSubmit) {
    var isCampoOk
    var isTextoOk
    var isMaxCaracteresOk
    nombreHTML.addEventListener("keyup", (evt) => {
        isTextoOk = compruebaTexto(nombreHTML, valores)
        isMaxCaracteresOk = maxCaracteres(nombreHTML.value, 25)
        isCampoOk = comprobar(isTextoOk, isMaxCaracteresOk)
        btnSubmit.nombreOk(isCampoOk)


    })
}

function eventoApellidos(apellidosHTML, valores, btnSubmit) {
    var isCampoOk
    var isTextoOk
    var isMaxCaracteresOk
    apellidosHTML.addEventListener("keyup", (evt) => {
        isTextoOk = compruebaTexto(apellidosHTML, valores)
        isMaxCaracteresOk = maxCaracteres(apellidosHTML.value, 50)
        isCampoOk = comprobar(isTextoOk, isMaxCaracteresOk)
        btnSubmit.apellidoOk(isCampoOk)


    })
}

function eventoEdad(edadHTML, alfabeto, btnSubmit) {
    var isCampoOk
    var isTextoOk
    var isValorOK
    edadHTML.addEventListener("keyup", (evt) => {
        isTextoOk = compruebaTexto(edadHTML, alfabeto)
        isCampoOk = comprobar(isTextoOk, isValorOK)
        btnSubmit.edadOk(isCampoOk)



    })
    edadHTML.addEventListener("change", (evt) => {

        isValorOK = maxValor(edadHTML, 10, 100)
        isCampoOk = comprobar(isTextoOk, isValorOK)
        btnSubmit.edadOk(isCampoOk)

    })
}

function eventoNota(notaHTML, alfabeto, btnSubmit) {
    var isCampoOk
    var isTextoOk
    var isValorOK

    notaHTML.addEventListener("keyup", (evt) => {
        isTextoOk = compruebaTexto(notaHTML, alfabeto)
        isCampoOk = comprobar(isTextoOk, isValorOK)
        btnSubmit.notaOk(isCampoOk)


    })

    notaHTML.addEventListener("change", (evt) => {

        isValorOK = maxValor(notaHTML, 0, 10)
        isTextoOk = comprobar(isTextoOk, isValorOK)
        btnSubmit.notaOk(isCampoOk)


    })
}