require('dotenv').config()
const express = require("express")
const app = express() 

const port = process.env.PORT;

const hbs = require('hbs');
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home', {
        logo:"Julio Diaz",
        frase:"Desarrollador Web"
    })
})
app.get('/generic', (req, res) => {
    res.render('generic')
})
app.get('/elements', (req, res) => {
    res.render('elements')
})

app.get('*', (req, res) => {
    res.render('404')
})


app.listen(port, ()=>{
    console.log(`App listening at http://localhost:${port}`);
})
