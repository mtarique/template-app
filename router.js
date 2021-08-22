const express = require('express'); 
const router = express.Router(); 
const userController = require('./controllers/userConttroller'); 

router.get('/', (req, res) => {
    res.render("login"); 
}); 

module.exports = router; 