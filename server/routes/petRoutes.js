const express = require("express");
const petController = require('./../controllers/petController');

// Routes:
const router = express.Router();

router.param('id', petController.checkID);

router
    .route('/')
    .get(petController.getAllPets)
    .post(petController.checkBody, petController.createPet);

router
    .route('/:id')
    .get(petController.getPet)
    .patch(petController.updatePet)
    .delete(petController.deletePet);

module.exports = router;