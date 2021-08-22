const express = require('express'); 
const app = express(); 

app.use('/public', express.static('public'));
app.set('views', 'views'); 
app.set('view engine', 'ejs'); 

app.get('/', (req, res) => {
    res.render("login")
}); 

app.listen(3000); 