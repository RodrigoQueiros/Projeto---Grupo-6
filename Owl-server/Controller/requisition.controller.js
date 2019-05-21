//const connectL = require('./connect');
const Requistion = require('../Models/requisition.model.js')

async function get(req, res) {
    try {
        return res.send(await Requistion.find())
    } catch (err) {
        return res.status(400).send({ error: `Could not get books: ${err}` })
    }
}


async function post(req, res) {
    try {
        Requistion.create(req.body)
        return res.send()
    }

    catch (err) {
        return res.status(400).send({ error: `Could not create books: ${err}` })

    }
}


module.exports = { get, post }