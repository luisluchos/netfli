const moviesModel = require('../models/movies.model');

module.exports = {

    detailMovies: async function(req, res, next) {
        let movie = await moviesModel.findById(req.params.id);
        res.json({movie: movie})
             },

     getMovies: async (req, res, next) => {
        let limit = req.query.limit ? parseInt(req.query.limit) : 10;
        let offset = req.query.offset ? parseInt(req.query.offset) : 0;
        
        let movies = await moviesModel.find().limit(limit).skip(offset);// .skip= The number of documents to skip in the results set.
        res.json({movies: movies});
      }

}
