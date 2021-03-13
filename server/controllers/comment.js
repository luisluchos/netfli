const commentsModel = require('../models/comments');

module.exports = {

    detailComment: async function(req, res, next) {
        let comment = await commentsModel.findById(req.params.id) 
        res.json(comment)
             }

}
