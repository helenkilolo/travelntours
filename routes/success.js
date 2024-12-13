const express = require('express');
const router = express.Router();

router.get('/success', (req, res) => {
  res.render('pages/success', {
    title: 'Submission Successful',
    message: 'Thank you for submitting your tour plan!',
  });
});

module.exports = router;

