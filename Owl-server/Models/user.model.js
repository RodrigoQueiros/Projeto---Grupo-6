var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  firstName: String,
  lastName:   String,
  email: String,
  password: String,
  ableToRequest: Boolean,
  type: String,
  nRequisitionsNow: Number,
  photo: String,
  points: Number,
  favTags: Array,
  //favTags: [ {idTag: Number}],  
});

userSchema.pre("save", async function(next) {
    const salt = 10;
    const hash = await bcrypt.hash(this.password, salt);
    this.password = hash;
     
    next();
})
 
const User = mongoose.model('User', userSchema);
 
module.exports = User;