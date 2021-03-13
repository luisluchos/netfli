const usersModel = require('../models/users');

module.exports = {

    detailUser: async function(req, res, next) {
       
        let user = await usersModel.findById(req.params.id, function(err, userDetail) {
        if (err) throw err;
        console.log("user detail:",userDetail) ; 
        return userDetail ;
            });
        res.json(user)

             }

}
