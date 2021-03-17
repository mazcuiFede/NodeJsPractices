const express = require("express")
const server = express();
const { PORT } = require("./config")
const { HomeRoutes, QuotesRoutes } = require("./routes")
const { NotFoundMiddleware } = require('./middlewares')

/* Middlewares */
server.use(express.static('./public')) //hago publica la carpeta 
server.use(express.json()) //Manejar las peticiones en JSON

server.use('/', HomeRoutes)
server.use('/', QuotesRoutes)
server.use(NotFoundMiddleware)

server.listen(PORT, () => {
    console.log("running")
})