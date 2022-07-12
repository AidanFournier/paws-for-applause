const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Pet = require('./../../models/petModel.js');

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
.then(() => console.log('DB connection successful'));

// Read JSON file:
const pets = JSON.parse(fs.readFileSync(`${__dirname}/pets.json`, 'utf-8'));

// Import data into databased
const importData = async () => {
    try {
        await Pet.create(pets);
        console.log('Data successfully loaded!');
    } catch (err) {
        console.log(err);
    }
    process.exit();
};

// Delete all data from collection:
const deleteData = async () => {
    try {
        await Pet.deleteMany();
        console.log('Data successfully deleted!');
    } catch (err) {
        console.log(err);
    }
    process.exit();
};

if(process.argv[2] === '--import') {
    importData();
} else if (process.argv[2] === '--delete') {
    deleteData();
}
