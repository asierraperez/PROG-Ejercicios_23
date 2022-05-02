
function main_() {
    var nombre = document.getElementById("nombre")
    var apellidos = document.getElementById("apellidos")
    var edad = document.getElementById("edad")
    var nota = document.getElementById("nota")

    var numeros = /[0-9]/
    var letras = /[a-z]/

    eventoNombre(nombre, numeros)
    eventoApellidos(apellidos, numeros)
    eventoEdad(edad, letras)
    eventoNota(nota, letras)
}
main_()