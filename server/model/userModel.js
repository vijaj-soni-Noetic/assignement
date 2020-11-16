const mongoose  = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: [true, 'Enter username']
    },
    email: {
        type: String,
        required: [true, 'Enter user email Id']
    },
    address: {
        type: String,
        required: false
    },
    mobile: {
        type: Number,
        required:false
    }

});
const User = mongoose.model('User', userSchema);
module.exports = User;