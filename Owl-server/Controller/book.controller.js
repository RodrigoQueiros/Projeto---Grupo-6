//const connectL = require('./connect');
const Book = require('../Models/book.model.js')

async function get(req, res) {
    try {
        return res.send(await Book.find())
    } catch (err) {
        return res.status(400).send({ error: `Could not get books: ${err}` })
    }
}


async function post(req, res) {
    try {
        Book.create(req.body)
        return res.send()
    }

    catch (err) {
        return res.status(400).send({ error: `Could not create books: ${err}` })

    }
}


module.exports = { get, post }