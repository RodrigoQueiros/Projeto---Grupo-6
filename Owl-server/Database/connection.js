const mongoose = require("mongoose")

const uri = `mongodb+srv://Teste:teste@cluster0-79krn.mongodb.net/test?retryWrites=true`

mongoose.connect(uri, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
})

mongoose.Promise = global.Promise

module.exports = mongoose