'use strict'
//Exportar el modelo USer desde el controlador 
const User = use('App/Models/User')

class UserController {

    //Creando el Login
    async login({request, auth}){
        const {username, email, password} = request.all();
        const token = await auth.attempt(username, password);
        return token;
    }
    
    //Creando Registro
    async store({request}){
        const {username, email, password} = request.all();
        const user = await User.create({
            username, email, password
        });
       return user;
    };
}

module.exports = UserController
