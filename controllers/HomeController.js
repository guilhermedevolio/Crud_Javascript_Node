const knex = require("../db/knex");
const User = require('../models/User');

class HomeController {

    index(req,res) {
        res.send('Rota Home menó');
    } 

    async users(req,res) {
        const users = await User.getAll();
       
        return res.json({...users});
    }

    async createUser(req, res) {
        const {name,email, password} = req.body;

        if(name == undefined) {
            return res.json({message: 'Preenche o nome ai vlw'})
        }

        if(email == undefined) {
            return res.json({message: 'Oh Deus, Preenche o email ai vlw'})
        }

        if(password == undefined) {
            return res.json({message: 'É mano tu cansa viu, faltou a senha'})
        }


       await User.create(name,email,password);

       return res.json({msg: 'Cadastrou mais um idiota ai'})
    }
}

module.exports = new HomeController();