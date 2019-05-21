const express = require("express")
const router = express.Router()
const controller = require("../Controller/review.controller")

router.get("/", controller.get)
router.post("/", controller.post)

module.exports = app => app.use("/reviews", router)