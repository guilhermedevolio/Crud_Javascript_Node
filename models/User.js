const db = require('../database/database')

class User {
    async getAll() {
        return await db.select("*").from("users");
    }
    
    async create(name,email) {
        try {
            return await db.insert({name, email}).table("users");
        }catch(err){
            console.log(err);
        }
    }
}

module.exports = new User();