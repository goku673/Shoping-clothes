const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// los modelos para mi usuario 

const userSchema  =  new Schema({
      name : String,
      password : String
});


const User = mongoose.model('User', userSchema);

module.exports = User;

