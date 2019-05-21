//const connectL = require('./connect');
const BookSugestion = require('../Models/bookSugestion.model.js')

async function get(req, res) {
    try {
        return res.send(await BookSugestion.find())
    } catch (err) {
        return res.status(400).send({ error: `Could not get bookSuggestion: ${err}` })
    }
}


async function post(req, res) {
    try {
        BookSugestion.create(req.body)
        return res.send()
    }

    catch (err) {
        return res.status(400).send({ error: `Could not create bookSuggestion: ${err}` })

    }
}


module.exports = { get, post }