const express = require('express');
const router = express.Router();
const TourPlan = require('../models/TourPlan'); // Import the TourPlan model

// Route to render the form
router.get('/create-tour-plan', (req, res) => {
  res.render('pages/create-tour-plan', { title: 'Custom Tour Plan' });
});

// Route to handle form submission
router.post('/submit-tour-plan', async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      fromDate,
      toDate,
      adults,
      children,
      rooms,
      citizenship,
      tripType,
      package: selectedPackage,
      extraDetails,
    } = req.body;

    console.log('Received Data:', {
      firstName,
      lastName,
      email,
      phone,
      fromDate,
      toDate,
      adults,
      children,
      rooms,
      citizenship,
      tripType,
      selectedPackage,
      extraDetails,
    });

    // Create a new TourPlan document and save to the database
    const tourPlan = new TourPlan(req.body);
    await tourPlan.save();

    // Render success page with a success message
    res.render('pages/success', {
      title: 'Submission Successful',
      message: 'Your tour plan was submitted successfully!',
    });
  } catch (error) {
    console.error('Error saving tour plan:', error);
    res.status(500).send('An error occurred. Please try again.');
  }
});

module.exports = router;



