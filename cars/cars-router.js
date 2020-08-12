const express = require('express');
const knex = require('knex');

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: './data/car-dealer.db3'
  },
  useNullAsDefault: true
});

const router = express.Router();

router.use(express.json());

//read mvp
router.get('/', (req, res) => {
    db('cars')
    .then(cars => {
        res.json(cars);
    })
    .catch( err => { 
        res.status(500).json ({message: 'failed to retrieve cars'})
    })
})

//write mvp
router.post("/", (req, res) => {
    const car = req.body; //< -- needs express.json() middleware

    db('cars').insert(car)
    .then(car => {
        res.status(201).json(car)
    })
    .catch (err => {
        res.status(500).json({ message: 'Failed to retrieve cars' });
      });
});

module.exports = router