'use strict'


// getuser-> nos devuelve el usuario logeado haceidno el uso del method check
class ProyectoController {
    index({auth}){
        const user = await auth.getUser();
        console.log(user);
        return {
            mensaje: "Hola estamos en index de proyecto"
        }
    }
}

module.exports = ProyectoController
