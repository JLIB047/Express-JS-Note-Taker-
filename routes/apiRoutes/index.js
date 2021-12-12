//route parameters - create new router onject 
const router = require('express').Router();

//add new route to noteRoutes
const noteRoutes = require('./noteRoutes');

//middleware 
router.use(noteRoutes);

//mapping the router
module.exports = router;