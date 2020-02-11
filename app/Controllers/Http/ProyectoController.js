'use strict'
const Proyecto = use('App/Models/Proyecto');

// getuser-> nos devuelve el usuario logeado haceidno el uso del method check
class ProyectoController {
    async index({auth}){
        const user = await auth.getUser();
        return await user.proyectos().fetch();
    }

    async create({auth, request}) {
        const user = await auth.getUser();
        const {nombre} = request.all();
        const proyecto = new Proyecto();
        proyecto.fill({
            nombre
        });
        await user.proyectos().save(proyecto);
        return proyecto;
    }

    async destroy({auth, request, params}){
        const user = await auth.getUser();
        const {id} = params;
        const proyecto = await Proyecto.find(id);
        if (proyecto.user_id !== user.id) {
            return response.status(403).json({
                mensaje: "Usted no es dueño de este pryecto, por ello no puedes eliminarlo"
            });
        }
        await proyecto.delete();
        return proyecto;
    }
}

module.exports = ProyectoController
