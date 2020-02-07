'use strict'
//Exportar el modelo USer desde el controlador 
const User = use('App/Models/User')

class UserController {
    async store({request}){
        const {username, email, password} = request.all();
        const user = await User.create({
            username, email, password
        });
       return user;
    };
}

module.exports = UserController
