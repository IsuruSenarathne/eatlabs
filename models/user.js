var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");
var passport = require('passport');

var User = new Schema({
    // username: { 
    //     type: String,
    //     required: true,     username and pass will auto add by passportmongoose
    //     unique: true
    // },
    // password:  {
    //     type: String,
    //     required: true
    // },
    admin:   {
        type: Boolean,
        default: false
    }
});

User.plugin(passportLocalMongoose);

module.exports =  mongoose.model('User', User);;