// Requires
const express = require('express');
const hbs  = require('express-handlebars');
const handlebars = hbs.engine;
require('dotenv').config()

//Variabelen
const app = express();
const port = process.env.PORT;

// Aangeven waar onze statishce files zich bevinden  
app.use(express.static('static'));

// Templating engine
app.engine('hbs', handlebars({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', './views');


//Routing
app.get('/', (req, res) => {
    res.render('home')
});

// Set server
app.listen(port, () => {
    console.log(`Gebruikte poort:${port}!`)
});


