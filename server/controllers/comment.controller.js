const commentsModel = require('../models/comments.model');

module.exports = {

    detailComment: async function(req, res, next) {
        let comment = await commentsModel.findById(req.params.id) 
        res.json(comment)
             },
    getComments : async function(req, res, next) {
        let comments = await commentsModel.find()
        res.json(comments)
    }         


}
