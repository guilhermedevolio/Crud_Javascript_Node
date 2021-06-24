const db = require('../db/knex');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class AuthController {
 
    async login(req,res) {
        const { email,password } = req.body;

        if(email == undefined || password == undefined ) {
            return res.json({message: 'Ae man você sabe que precisa de email e senha pra seguir no procedimento'});
        }

        var getUser = await db.select(["name", "password"]).from("users").where({email: email}).first();
        
        const validatePassword = await bcrypt.compare(password, getUser.password);

        if(!validatePassword) {
           return res.json({message: 'Opa mano , a senha ta diferente de certo'});
        }

        const token = jwt.sign({email: email, name: getUser.name}, 'fodaseessakey');
        return res.json({message: 'Logou', token});
    }
}

module.exports = new AuthController();