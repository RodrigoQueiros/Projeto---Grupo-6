//const connectL = require('./connect');
const Requistion = require('../Models/requisition.model.js')

async function get(req, res) {
    const id = req.query
    try {
        if (id.userId) {
            return res.send(await Requistion.find({userId: id.userId}))
        } else {
            return res.status(400).send({ error: `Could not get books: ${err}` })
        }
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

async function put(req, res) {
    try {
        console.log("edited")
        Requistion.findByIdAndUpdate(
            req.params.id,
            { $set: { "active" : false} },
            { new: true },
            (err, data) => {
                if (err) {
                    return res.status(400).send({ error: `Could not edit book: ${err}` })
                }
            }
        )
        //console.log(Book.find())
        return res.send("edited")
    }

    catch (err) {
        return res.status(400).send({ error: `Could not remove books: ${err}` })

    }
}



module.exports = { get, post, put }