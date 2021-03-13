const usersModel = require('../models/users');

module.exports = {

    detailUser: async function(req, res, next) {
        let user = await usersModel.findById(req.params.id);
        res.json(user)
             },

     getUsers: async function(req, res, next) {
        let users = await usersModel.find();
        res.json({users:users})}

}
