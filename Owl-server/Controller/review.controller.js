//const connectL = require('./connect');
const Review = require('../Models/review.model.js')

async function get(req, res) {
    try {
        return res.send(await Review.find())
    } catch (err) {
        return res.status(400).send({ error: `Could not get reviews: ${err}` })
    }
}


async function post(req, res) {
    try {
        Review.create(req.body)
        return res.send()
    }

    catch (err) {
        return res.status(400).send({ error: `Could not create review: ${err}` })

    }
}


module.exports = { get, post }