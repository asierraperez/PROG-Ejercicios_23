class submit {
    constructor(btn, isNombreOk, isApellidoOk, isEdadOk, isNotaOk, datos) {
        this.btn = btn
        this.isNombreOk = isNombreOk
        this.isApellidoOk = isApellidoOk
        this.isEdadOk = isEdadOk
        this.isNotaOk = isNotaOk
        this.nombre
        this.datos = datos
        this.enviar(this.datos.nombre.value, this.datos.apellidos.value, this.datos.edad.value, this.datos.nota.value)
    }
    nombreOk(isCampoOk) {
        this.isNombreOk = isCampoOk
        console.log("Nombre " + this.isNombreOk)
        this.enableSubmit()
    }
    apellidoOk(isCampoOk) {
        this.isApellidoOk = isCampoOk
        console.log("Apellido " + this.isApellidoOk)
        this.enableSubmit()
    }
    edadOk(isCampoOk) {
        this.isEdadOk = isCampoOk
        console.log("Edad " + this.isEdadOk)
        this.enableSubmit()
    }
    notaOk(isCampoOk) {
        this.isNotaOk = isCampoOk
        console.log("Nota " + this.isNotaOk)
        this.enableSubmit()
    }
    enableSubmit() {
        if (this.isNombreOk && this.isApellidoOk && this.isEdadOk && this.isNotaOk) {
            this.btn.disabled = false
        } else {
            this.btn.disabled = true
        }
    }
    enviar(Nombre, Apellido, Edad, Nota) {
        this.btn.addEventListener("click", (evt) => {
            alert("se pulsó el botón de envío con la información:\n" +
                "Nombre " + Nombre + "\n" +
                "Apellido " + Apellido + "\n" +
                "Edad " + Edad + "\n" +
                "Nota " + Nota + "\n")
        })
    }


}