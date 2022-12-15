const express = require('express');
const Drone = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then(drones => res.render('drones/list', { drones }))
    .catch(err => console.log(err));

});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form');
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed } = req.body;
  
  Drone.create({ name, propellers, maxSpeed })
    .then(() => res.redirect('/drones'))
    .catch(() => res.render('drones/create-form'));

});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  Drone.findById(req.params.id)
    .then(drone => res.render('drones/update-form', { drone }))
    .catch(() => res.redirect('/drones'));

});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  Drone.findByIdAndUpdate(req.params.id, { name: req.body.name, propellers: req.body.propellers, maxSpeed: req.body.maxSpeed })
    .then(() => res.redirect('/drones'))
    .catch(() => redirect(path.join('/drones', req.params.id, 'edit')));
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  Drone.findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/drones'))
    .catch(() => res.redirect('/drones'));
});

module.exports = router;
