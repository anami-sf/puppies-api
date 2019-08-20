const mongoose = require('mongoose')

var puppySchema = new mongoose.Schema({
    name: String,
    breed: {type: String, default: 'Mixed'},
    age: {type: Number, default: 0} 
});

module.exports = mongoose.model('Puppy', puppySchema)