'use strict'

class UserController {
    store({request}){
        const {username, email, password} = request.all();
        const user = User.create({
            username, email, password
        });
       
    };
}

module.exports = UserController
