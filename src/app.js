import bodyParser from "body-parser"
import express, {Router} from "express"
import cors from "cors"
import registerRoutes from "./routes/index.js"
import NewsController from "./controllers/NewsGetController.js"
import LoginController from "./controllers/LoginController.js"
import MySQLRespository from "./news/infraestructure/MySQLRespository.js"
import MongoRepository from "./news/infraestructure/MongoRepository.js"

const app = express()

app.set("port", process.env.PORT || 8080)

// const express = require("express")
// const bodyParser = require("body-parser")
// const cors = require("cors")
// const routes = require("./api/routes")


// const server = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

const router = Router()

app.use(router)

const dbConfig = {
    host: "localhost",
    user: "root",
    password: "root",
    database: "sqli",
}
const repository = new MySQLRespository(dbConfig)
const mongoRepository = new MongoRepository({databse: "test"})

const newsController = new NewsController(mongoRepository)
const loginController = new LoginController(mongoRepository)

registerRoutes(router, newsController, loginController)

export default app

// server.use("/", routes)

// // server.get("/", (req, res, next) => {
// //     res.send("Hola mundo")
// // })

// module.exports = server
