//const connectL = require('./connect');
const Review = require('../Models/review.model.js')

async function get(req, res) {
    const id = req.query
    console.log(id)
    try {
        if (id.bookId){
            console.log("true")
            return res.send(await Review.find({bookId: id.bookId}))
        } else {
            return res.status(400).send({ error: `Could not get reviews: id not defined` })
        }
        
    } catch (err) {
        return res.status(400).send({ error: `Could not get reviews: ${err}` })
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
        Review.create(req.body)
        return res.send()
    }

    catch (err) {
        return res.status(400).send({ error: `Could not create review: ${err}` })

    }
}


module.exports = { get, post }