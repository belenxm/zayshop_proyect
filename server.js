const express = require ('express')
const app = express()
var hbs = require('hbs');

const port = 3000


app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'));


app.get ('/', (req, res) => {
   res.render('index',{
    titulo: "mi shop"
   }) 
})


app.get ('/about', (req, res) => {
   res.render('about',{
    titulo: "Sobre Nosotros"
   }) 
})


app.get ('/shop', (req, res) => {
   res.render('shop',{
    titulo: "Shop Market"
   }) 
})


app.get ('/contact', (req, res) => {
   res.render('contact',{
    titulo: "Contactanos"
   }) 
})


 



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
}) 