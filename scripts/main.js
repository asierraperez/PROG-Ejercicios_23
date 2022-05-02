
function main_() {
    var nombre = document.getElementById("nombre")
    var apellidos = document.getElementById("apellidos")
    var edad = document.getElementById("edad")
    var nota = document.getElementById("nota")
    const btnSubmit = new submit(document.getElementById("submit"), false, false, false, false)


    var numeros = /[0-9]/
    var letras = /[a-z]/

    eventoNombre(nombre, numeros, btnSubmit)
    eventoApellidos(apellidos, numeros, btnSubmit)
    eventoEdad(edad, letras, btnSubmit)
    eventoNota(nota, letras, btnSubmit)
}
main_()