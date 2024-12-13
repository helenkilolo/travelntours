const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const session = require('express-session');

// Load environment variables
require('dotenv').config();

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'helenkilolo', // Replace with your own secret
  resave: false,
  saveUninitialized: true,
}));

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Use express-ejs-layouts
app.use(expressLayouts);
app.set('layout', 'layouts/main'); // Default layout

// Routes
const homeRoutes = require('./routes/home');
const toursRoutes = require('./routes/tours');
const contactRoutes = require('./routes/contact');
const createtourplanRoutes = require('./routes/create-tour-plan');
const successRoutes = require('./routes/success'); 
const adminRoutes = require('./routes/admin');

app.use('/', homeRoutes);
app.use('/tours', toursRoutes);
app.use('/contact', contactRoutes);
app.use('/', createtourplanRoutes);
app.use('/', successRoutes); 
app.use('/', adminRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).render('pages/404', { title: 'Page Not Found' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

mongoose
  .connect(process.env.MONGODB_URI, {
    
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));