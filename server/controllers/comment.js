const commentsModel = require('../models/comments');

module.exports = {

    detailComment: async function(req, res, next) {
       
        let comment = await commentsModel.findById(req.params.id, function(err, commentDetail) {
        if (err) throw err;
        console.log("comment detail:",commentDetail) ; 
        return commentDetail ;
            });
        res.json(comment)

             }

}
