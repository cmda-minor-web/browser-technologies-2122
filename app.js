// Requires
const express = require('express');
const hbs  = require('express-handlebars');
const handlebars = hbs.engine;
require('dotenv').config()

//Variabelen
const app = express();
const port = process.env.PORT;

//BodyParser
app.use(express.urlencoded({ extended: false }));

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

app.get('/resultaten', (req, res) => {
    res.render('results')
});

app.post('/resultaten', (req, res) => {
    let vraag1 = req.body.vraag1;
    let vraag2 = req.body.vraag2;
    let vraag3 = req.body.vraag3;
    console.log(vraag1 + vraag2 + vraag3)
    res.render('results')
});

// Set server
app.listen(port, () => {
    console.log(`Gebruikte poort:${port}!`)
});


