const knex = require("../database/database");
const User = require("../models/User");

class HomeController {
    
    index(req,res) {
        res.send('Rota Home menó');
    } 

    async users(req,res) {
        const users = await User.getAll();
       
        res.json({...users});
    }

    async createUser(req, res) {
        const {name,email} = req.body;

        if(name == undefined) {
            return res.json({message: 'Preenche o nome ai vlw'})
        }

        if(email == undefined) {
            return res.json({message: 'Preenche o email ai vlw'})
        }

       await User.create(name,email);

       return res.json({msg: 'Cadastrou mais um idiota ai'})
    }
}

module.exports = new HomeController();