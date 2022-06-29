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

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App running on ${port}`);
});