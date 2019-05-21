//const connectL = require('./connect');
const User = require('../Models/user.model.js')

async function get(req, res) {
    try {
        return res.send(await User.find())
    } catch (err) {
        return res.status(400).send({ error: `Could not get users: ${err}` })
    }
}
/*
async function get(req, res) {
    const { email } = req.query
    console.log("teste")
    try {
        if (email) {
            console.log("email")
            const response = await User.findOne({ email })
            if (response) {
                return res.send(response)
            } else {
                return res.status(404).send({ error: "Email not found" })
            }
        } else {
            console.log("no email")
            try {
                return res.send(await User.find())
            } catch (err) {
                return res.status(400).send({ error: err })
            }
        }

    } catch (err) {
        return res.status(400).send({ error: `Could not get users: ${err}` })
    }
}*/

async function post(req, res) {
    try {
        User.create(req.body)
        return res.send()
    }

    catch (err) {
        return res.status(400).send({ error: `Could not create user: ${err}` })

    }
}


module.exports = { get, post }