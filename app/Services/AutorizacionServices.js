const AccesoProhibidoException = use('App/Exceptions/AccesoProhibidoException')

class AutorizacionService {
    verificarPermiso(recurso, user){
        if (recurso.user_id !== user.id) {
           throw new AccesoProhibidoException();
            };
    }
}

module.exports = new AutorizacionService();