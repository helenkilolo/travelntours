const express = require('express');
const router = express.Router();

// Sample tours data
const tours = [
  { id: 1, name: 'Masai Mara Safari', image: '/images/mara.jpeg', description: 'Experience the great migration.', price: 500 },
  { id: 2, name: 'Amboseli Adventure', image: '/images/amboseli.jpeg', description: 'View majestic elephants with Mt. Kilimanjaro in the backdrop.', price: 450 },
  { id: 3, name: 'Lamu Island Getaway', image: '/images/lamu.jpg', description: 'Relax in the serene beaches of Lamu.', price: 300 },
];

// Get all tours
router.get('/', (req, res) => {
  res.render('tours/all', { title: 'All Tours', tours });
});

// Get details of a single tour
router.get('/:id', (req, res) => {
  const tour = tours.find(t => t.id === parseInt(req.params.id));
  if (tour) {
    res.render('tours/details', { title: tour.name, tour });
  } else {
    res.status(404).send('Tour not found');
  }
});

// Booking a tour (future feature)
router.post('/booking', (req, res) => {
  res.send('Booking functionality coming soon!');
});

module.exports = router;

