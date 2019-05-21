const express = require("express")
const router = express.Router()
const controller = require("../Controller/bookSuggestion.controller")

router.get("/", controller.get)
router.post("/", controller.post)

module.exports = app => app.use("/bookSuggestions", router)