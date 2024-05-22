
const express = require('express')
const app = express()

// EJS
app.set('views','./views')
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.send('Hello world !')
})

app.listen(3001)