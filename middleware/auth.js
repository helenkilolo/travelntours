// middleware/auth.js
module.exports = function isAuthenticated(req, res, next) {
    if (req.session && req.session.user) { // Check if session exists
      next(); // User is authenticated
    } else {
      res.redirect('/admin/login'); // Redirect to login page
    }
  };
  