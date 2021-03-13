const moviesModel = require('../models/movies');

module.exports = {

    detailMovies: async function(req, res, next) {
       
        let movie = await moviesModel.findById(req.params.id, function(err, movieDetail) {
        if (err) throw err;
        return movieDetail ;
            });
        res.json(movie)

             },

     getMovies: async function(req, res, next) {

        let movies= await moviesModel.find({}, function(err, moviesDetail) {
        if (err) throw err;
        
        return moviesDetail ;
            });
        res.json(movies)

             }

}
