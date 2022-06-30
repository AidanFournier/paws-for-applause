const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const petSchema = new Schema({
    name: {
        type: String,
        required: [true, 'A pet must have a name']
    },
    species: {
        type: String,
        required: [true, 'Must specify the species of pet']
    },
    sex: {
        type: String,
        required: [true, 'A pet must have a sex']
    },
    age: {
        type: String,
        required: [true, 'A pet must have an age']
    },
    breed: {
        type: String
    }
});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
