const express = require('express')
const setupDB = require('./config/database')
const router = require('./config/router')

const app = express()
const port = 3030

setupDB()
app.use(express.json())
app.use('/', router)

app.listen(port, ()=>{
    console.log('listing to the port', port)
})