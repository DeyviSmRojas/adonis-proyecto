'use strict'
const Proyecto = use('App/Models/Proyecto');
const AutorizacionServices = use('App/Services/AutorizacionServices')

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
        AutorizacionServices().verificarPermiso(proyecto, user);
        await proyecto.delete();
        return proyecto;
    }
}

module.exports = ProyectoController
