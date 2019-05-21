const express = require("express")
const router = express.Router()
const controller = require("../Controller/book.controller")

router.get("/", controller.get)
router.post("/", controller.post)

module.exports = app => app.use("/books", router)