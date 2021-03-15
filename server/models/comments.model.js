/* const axios = require('axios')
const dbAddress = 'http://localhost:27017';

module.exports={
    findOne: async (id) => {
        let response = await axios.get(`${dbAddress}/comments/${id}`);
        if (response.status === 200) {
          return response.data;
        } else {
          return [];
        }
      },
} */

const mongoose = require('mongoose');

const commentsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    email: String,
    text: String,
    movie_id: mongoose.Schema.Types.ObjectId,
    date: Date
});

const comments = mongoose.model('comments', commentsSchema);

module.exports = comments;
