
const express = require('express')
const app = express()

// EJS
app.set('views','./views')
app.set('view engine','ejs')

let message = "Suis un super message..."

app.get('/',(req,res)=>{
    res.render('home',{message})
})

app.listen(3001)