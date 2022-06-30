const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
);

mongoose
.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})
.then(() => console.log('DB connectiion successful!'));

const petSchema = new mongoose.Schema({
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

const testPet = new Pet({
    name: 'Rupert',
    species: 'Cat',
    sex: 'male',
    age: 7,
    breed: 'Calico'
});

testPet.save().then(doc => {
    console.log(doc);
}).catch(err => {
    console.log('Error 👹 :', err);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App running on ${port}`);
});