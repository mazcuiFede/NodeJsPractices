const express = require("express")
const fs = require('fs')

const home = fs.readFileSync('./index.html')
const about = fs.readFileSync('./about.html')

const server = express()

server.get('/', (req, res) => {
    res.write(home)
})

server.get('/about', (req, res) => {
    res.write(home)
})

server.listen(8080, () => {
    console.log("server ok")
})
