function eventoNombre(nombreHTML, valores, btnSubmit) {
    var isCampoOk
    var isTextoOk
    var isMaxCaracteresOk
    nombreHTML.addEventListener("change", (evt) => {
        isTextoOk = compruebaTexto(nombreHTML, valores)
        isMaxCaracteresOk = maxCaracteres(nombreHTML.value, 25)
        isCampoOk = comprobar(isTextoOk, isMaxCaracteresOk)
        btnSubmit.nombreOk(isCampoOk)
        localStorage.setItem("nombre", nombreHTML.value)


    })
}

function eventoApellidos(apellidosHTML, valores, btnSubmit) {
    var isCampoOk
    var isTextoOk
    var isMaxCaracteresOk
    apellidosHTML.addEventListener("change", (evt) => {
        isTextoOk = compruebaTexto(apellidosHTML, valores)
        isMaxCaracteresOk = maxCaracteres(apellidosHTML.value, 50)
        isCampoOk = comprobar(isTextoOk, isMaxCaracteresOk)
        btnSubmit.apellidoOk(isCampoOk)
        localStorage.setItem("apellidos", apellidosHTML.value)


    })
}

function eventoEdad(edadHTML, alfabeto, btnSubmit) {
    var isCampoOk
    var isTextoOk
    var isValorOK

    edadHTML.addEventListener("change", (evt) => {

        isValorOK = maxValor(edadHTML, 10, 100)
        isTextoOk = compruebaTexto(edadHTML, alfabeto)
        isCampoOk = comprobar(isTextoOk, isValorOK)
        btnSubmit.edadOk(isCampoOk)
        localStorage.setItem("edad", edadHTML.value)

    })
}

function eventoNota(notaHTML, alfabeto, btnSubmit) {
    var isCampoOk
    var isTextoOk
    var isValorOK


    notaHTML.addEventListener("change", (evt) => {

        isValorOK = maxValor(notaHTML, 0, 10)
        isTextoOk = compruebaTexto(notaHTML, alfabeto)
        isCampoOk = comprobar(isTextoOk, isValorOK)
        btnSubmit.notaOk(isCampoOk)
        localStorage.setItem("nota", notaHTML.value)


    })
}

function eventoSubmit(datos) {
    datos.submit.addEventListener("click", (evt) => {

        alert("se pulsó el botón de envío con la información:\n" +
            "Nombre " + datos.nombre.value + "\n" +
            "Apellido " + datos.apellidos.value + "\n" +
            "Edad " + datos.edad.value + "\n" +
            "Nota " + datos.nota.value + "\n")
        $.ajax({
            data: {
                "nombre": datos.nombre.value,
                "apellidos": datos.apellidos.value,
                "edad": datos.edad.value,
                "nota": datos.nota.value
            },
            url: "main.php",
            type: "post",
            success: function (response) {
                try {

                    var respuesta = JSON.parse(response)
                    console.log(respuesta.resultado)


                } catch (error) {
                    console.log("Error")
                }

            }

        })

    })
}
