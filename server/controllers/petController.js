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
exports.getAllPets = (req, res) => {
    console.log(req.requestTtime);
    res.status(200).json({
        status: 'success',
        requestedAt: req.requestTtime,
        // results: pets.length,
        // data: {
        //     pets
        // }
    })
};

exports.getPet = (req, res) => {
    console.log(req.params);
    const id = req.params.id * 1;

    // const pet = pets.find(el => el.id === id)
 
    // res.status(200).json({
    //     status: 'success',
    //     data: {
    //         pet
    //     }
    // })
};

exports.createPet = (req, res) => {
    res.status(201).json({
        status: 'success',
        // data: {
        //     pet: newPet
        // }
    });
};

exports.updatePet = (req, res) => {
    res.status(200).json({
        status: "success",
        data: {
            pet: '<Updated pet here...>'
        }
    })
};

exports.deletePet = (req, res) => {
    res.status(204).json({
        status: "success",
        data: null
    })
};