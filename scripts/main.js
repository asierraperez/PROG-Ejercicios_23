
function main_() {
    /*var nombre = document.getElementById("nombre")
    var apellidos = document.getElementById("apellidos")
    var edad = document.getElementById("edad")
    var nota = document.getElementById("nota")*/
    const view = new View()
    const btnSubmit = new submit(view.submit, false, false, false, false, view)


    var numeros = /[0-9]/
    var letras = /[a-z]/

    eventoNombre(view.nombre, numeros, btnSubmit)
    eventoApellidos(view.apellidos, numeros, btnSubmit)
    eventoEdad(view.edad, letras, btnSubmit)
    eventoNota(view.nota, letras, btnSubmit)
}
main_()