
const express = require('express')
const app = express()

// EJS
app.set('views','./views')
app.set('view engine','ejs')

// Var
let message = "Suis un super message..."

// Route
app.get('/',(req,res)=>{
    res.render('home',{message})
})
app.get('/contact',(req,res)=>{
    res.render('pages/contact')
})

app.listen(3001)