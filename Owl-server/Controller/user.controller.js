//const connectL = require('./connect');
const User = require('../Models/user.model.js')

async function get(req, res) {
    try {
        return res.send(await User.find())
    } catch (err) {
        return res.status(400).send({ error: `Could not get users: ${err}` })
    }
}

async function post(req, res) {
    try {
        User.create(req.body)
        return res.send()
    }

    catch (err) {
        return res.status(400).send({ error: `Could not create user: ${err}` })

    }
}

async function put(req, res) {
    try {
        console.log("edited")
        console.log(req.params.id)
        User.findOneAndUpdate(
            req.params.id,
            req.body,
            { new: true },
            (err, data) => {
                if (err) {
                    return res.status(400).send({ error: `Could not edit book: ${err}` })
                }
            }
        )
        return res.send("edited " + req.params.id)
    }

    catch (err) {
        return res.status(400).send({ error: `Could not remove books: ${err}` })

    }
}


async function del(req, res) {
    const _id = req.params.id
    try {
        console.log(_id)
        await User.findByIdAndDelete(_id)
        console.log("removed")
        return res.send("removed")
    }

    catch (err) {
        return res.status(400).send({ error: `Could not remove books: ${err}` })

    }
}


module.exports = { get, post , put, del}