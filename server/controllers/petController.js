const Pet = require('../models/petModel');

exports.checkBody = (req, res, next) => {
    if (!req.body.name || !req.body.age) {
        return res.status(400).json({
            status: 'fail',
            message: 'Missing name or age'
        })
    }
    next();
}

// Route handlers/controllers:
exports.getAllPets = async (req, res) => {
    try {
        const pets = await Pet.find();

        res.status(200).json({
            status: 'success',
            results: pets.length,
            data: {
                pets
            }
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err
        });
    }
};

exports.getPet = async (req, res) => {
    try {
        const pet = await Pet.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            data: {
                pet
            }
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err
        });
    }
};

exports.createPet = async (req, res) => {
    try {
    
        const newPet = await Pet.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                pet: newPet
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: 'Invalid data sent!'
        })
    };
};

exports.updatePet = async (req, res) => {
    try {
        const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
            status: "success",
            data: {
                pet: '<Updated pet here...>'
            }
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err
        });
    }
};

exports.deletePet = (req, res) => {
    res.status(204).json({
        status: "success",
        data: null
    })
};