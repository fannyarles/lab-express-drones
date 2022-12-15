// Iteration #1
const Drone = require('../models/Drone.model');
const mongoose = require('mongoose');

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];

mongoose.connect('mongodb://localhost/lab-express-drones')
    .then(x => console.log(`Connection openned ${x.connection.name}`))
    .then(() => Drone.insertMany(drones))
    .then(x => console.log(`Drones added!`))
    .then(() => mongoose.connection.close())
    .catch(err => console.log(err));