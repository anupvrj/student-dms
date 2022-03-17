const mongoose = require('mongoose');
 
let schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    gender:String,
    status:String

})

const UserSchema=mongoose.model('userDB',schema);

module.exports=UserSchema;