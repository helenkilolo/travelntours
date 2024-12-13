const express = require('express');
const router = express.Router();

// Contact form route
router.get('/', (req, res) => {
  res.render('pages/contact', { title: 'Contact Us' });
});

router.post('/', (req, res) => {
  const { name, email, message } = req.body;
  // For now, just send back a confirmation
  res.send(`Thanks for reaching out, ${name}! We'll respond to your inquiry soon.`);
});

module.exports = router;
