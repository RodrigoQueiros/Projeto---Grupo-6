const mongoose = require("mongoose")
const config = require("../config")

const uri = `mongodb+srv://Owlys:OwlMongoP2.@cluster0-79krn.mongodb.net/test?retryWrites=true`

mongoose.connect(uri, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
})

mongoose.Promise = global.Promise

module.exports = mongoose