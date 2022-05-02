function eventoNombre(nombreHTML, valores) {
    nombreHTML.addEventListener("keyup", (evt) => {
        nombreHTML.value = compruebaTexto(nombreHTML.value, valores)
        nombreHTML.value = maxCaracteres(nombreHTML.value, 25)
    })
}

function eventoApellidos(apellidosHTML, valores) {
    apellidosHTML.addEventListener("keyup", (evt) => {
        apellidosHTML.value = compruebaTexto(apellidosHTML.value, valores)
        apellidosHTML.value = maxCaracteres(apellidosHTML.value, 50)
    })
}

function eventoEdad(edadHTML, alfabeto) {
    edadHTML.addEventListener("keyup", (evt) => {
        edadHTML.value = compruebaTexto(edadHTML.value, alfabeto)

    })
    edadHTML.addEventListener("change", (evt) => {

        edadHTML.value = maxValor(edadHTML.value, 10, 100)
    })
}

function eventoNota(notaHTML, alfabeto) {
    notaHTML.addEventListener("keyup", (evt) => {
        notaHTML.value = compruebaTexto(notaHTML.value, alfabeto)
    })

    notaHTML.addEventListener("change", (evt) => {

        notaHTML.value = maxValor(notaHTML.value, 0, 10)
    })
}