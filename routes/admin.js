const express = require('express');
const router = express.Router();
const TourPlan = require('../models/TourPlan'); // Import the TourPlan model


// Middleware to check authentication
function ensureAuthenticated(req, res, next) {
  if (req.session && req.session.user) { // Check if session exists
    return next(); // User is authenticated
  }
  res.redirect('/admin/login'); // Redirect to login page if not authenticated
}

// Render login page
router.get('/admin/login', (req, res) => {
  res.render('admin/login', { title: 'Admin Login', error: null }); // Pass `error` as null by default
});


// Define admin credentials
const ADMIN_CREDENTIALS = { 
  username: 'helenkilolo@gmail.com', 
  password: 'helenkilolo' 
};

// Handle login form submission
router.post('/admin/login', (req, res) => {
  const { username, password } = req.body;

  // Check if the submitted username and password match the admin credentials
  if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
    req.session.user = username; // Store the admin user in the session
    res.redirect('/admin'); // Redirect to the admin dashboard
  } else {
    // Render the login page with an error message if credentials are invalid
    res.render('admin/login', { 
      title: 'Admin Login', 
      error: 'Invalid credentials. Please try again.' 
    });
  }
});


// Handle logout
router.get('/admin/logout', (req, res) => {
  req.session.destroy(); // Destroy the session
  res.redirect('/admin/login'); // Redirect to login page
});

// Admin Dashboard (Secured Route)
router.get('/admin', ensureAuthenticated, async (req, res) => {
  try {
    const totalPlans = await TourPlan.countDocuments(); // Count total plans
    const plans = await TourPlan.find().sort({ createdAt: -1 }).limit(10); // Fetch recent 10 plans
    res.render('admin/dashboard', { title: 'Admin Dashboard', totalPlans, plans }); // Render dashboard
  } catch (error) {
    console.error('Error fetching tour plans:', error);
    res.status(500).send('An error occurred.');
  }
});

// View All Tour Plans (Secured Route)
router.get('/admin/plans', ensureAuthenticated, async (req, res) => {
  try {
    const plans = await TourPlan.find().sort({ createdAt: -1 }); // Fetch all plans
    res.render('admin/plans', { title: 'All Tour Plans', plans }); // Render plans page
  } catch (error) {
    console.error('Error fetching all plans:', error);
    res.status(500).send('An error occurred.');
  }
});

// View Single Tour Plan (Secured Route)
router.get('/admin/plans/:id', ensureAuthenticated, async (req, res) => {
  try {
    const plan = await TourPlan.findById(req.params.id);
    if (!plan) {
      return res.status(404).send('Tour plan not found.');
    }
    res.render('admin/plan-details', { title: 'Plan Details', plan });
  } catch (error) {
    console.error('Error fetching plan details:', error);
    res.status(500).send('An error occurred.');
  }
});

// Add New Plan (Optional Secured Route)
router.post('/admin/plans/add', ensureAuthenticated, async (req, res) => {
  try {
    const newPlan = new TourPlan(req.body);
    await newPlan.save(); // Save to database
    res.redirect('/admin/plans'); // Redirect to all plans page
  } catch (error) {
    console.error('Error adding new plan:', error);
    res.status(500).send('An error occurred while adding a new plan.');
  }
});

// Delete a plan
router.post('/admin/plans/:id/delete', ensureAuthenticated, async (req, res) => {
  try {
    await TourPlan.findByIdAndDelete(req.params.id); // Delete the plan by ID
    res.redirect('/admin/plans'); // Redirect back to all plans
  } catch (error) {
    console.error('Error deleting plan:', error);
    res.status(500).send('An error occurred while deleting the plan.');
  }
});


module.exports = router;
