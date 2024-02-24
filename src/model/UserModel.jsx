const mongoose = require('mongoose');

const DataScema = mongoose.Schema({
    email:{type:String,unique:true,required:true,lowercase:true},
    name:{type:String,required:true},
    mobile:{type:String,required:true},
    password:{type:String,required:true},
    otp:{type:String,required:true}
},
{
    timestamps:true,versionKey:false
})

const UserModel = mongoose.model('users',DataScema);

module.exports = UserModel;