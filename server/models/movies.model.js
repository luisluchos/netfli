
const mongoose = require('mongoose');

const moviesSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    plot: String,
    genres: Array,
    runtime: Number,
    cast: Array,
    poster: String,
    title: String,
    fullplot: String,
    languages: Array,
    released: Date,
    directors: Array,
    rated: String,
    awards: {
        wins: Number,
        nominations: Number,
        text: String
    },
    lastUpdated: Date,
    year: Number,
    imdb:{
        rating: Number,
        votes: Number,
        id: Number
    },
    countries: Array,
    type: String,
    tomatoes: {
        viewer:{
            rating: Number,
            numReviews: Number,
            meter: Number
        },
        fresh: Number,
        critic:{
            rating: Number,
            numReviews: Number,
            meter: Number   
        },
        rotten: Number,
        lastUpdated: Date
    }
    
});

const movies = mongoose.model('movies', moviesSchema);  // el primer parámetro es el nombre de la tabla

module.exports = movies;
