class submit {
    constructor(btn, isNombreOk, isApellidoOk, isEdadOk, isNotaOk, datos) {
        this.btn = btn
        this.isNombreOk = isNombreOk
        this.isApellidoOk = isApellidoOk
        this.isEdadOk = isEdadOk
        this.isNotaOk = isNotaOk
        this.nombre
        this.datos = datos
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



}