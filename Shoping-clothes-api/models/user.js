const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// los modelos para mi usuario 

const userSchema  =  new Schema({
      email : String,
      password : String
});


const User = mongoose.model('Usuario', userSchema);

module.exports = User;

