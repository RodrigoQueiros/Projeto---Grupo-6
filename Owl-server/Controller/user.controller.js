//const connectL = require('./connect');
const User = require('../Models/user.model.js')
const Joi = require('@hapi/joi');

async function get(req, res) {
    try {
        return res.send(await User.find().lean())
    } catch (err) {
        return res.status(400).send({ error: `Could not get users: ${err}` })
    }
}

async function post(req, res) {
    try {
        const schema = Joi.object().keys({
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
            confirmPassword: Joi.string().valid(Joi.ref('password')).required()

        })

        // Return result.
        const result = Joi.validate(req.body, schema);
        if (result.error) {
            return res.status(400).send({ error: `Something went wrong}` })
            //You should send all errors ;)
        }
        else {

            User.create(req.body)
            return res.status(201).send({ yey: "Regist done with ponkiponki"})

        }
        // result.error === null -> valid


    }

    catch (err) {
        return res.status(400).send({ error: `Could not create user: ${err}` })

    }
}

async function put(req, res) {
    try {
        console.log("edited")
        console.log(req.params.id)
        User.findByIdAndUpdate(
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


module.exports = { get, post, put, del }