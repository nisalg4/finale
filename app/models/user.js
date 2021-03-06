const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    name:{
        type:String,
        required:[true,'Name field is required']
    },
    password:{
        type:String,
        required:[true, 'Password field is required']
    },
//new add
    message:{
        type:String,
        required:[true, 'no message'],
	   default: '###'
    },
    
//-------------
    admin:{
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('user', UserSchema);
