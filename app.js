
const express = require('express')
const app = express()
const port = 5001
const urlRouter = require('./route/url.route');

app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({extended : true}));
app.use('/' , urlRouter)

app.listen(port , ()=>{
    console.log(`listen on ${port}`)
})