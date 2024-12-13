const express = require('express');
const router = express.Router();

// Sample featured tours data
const tours = [
  { id: 1, name: 'Masai Mara Safari', image: '/images/mara.jpeg', description: 'Experience the great migration.', price: 500 },
  { id: 2, name: 'Amboseli Adventure', image: '/images/amboseli.jpeg', description: 'View majestic elephants with Mt. Kilimanjaro in the backdrop.', price: 450 },
  { id: 3, name: 'Lamu Island Getaway', image: '/images/lamu.jpg', description: 'Relax in the serene beaches of Lamu.', price: 300 },
];

// Homepage route
router.get('/', (req, res) => {
  res.render('pages/home', { title: 'Home', tours });
});


module.exports = router;
