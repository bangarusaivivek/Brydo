const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const crypto = require('crypto');

const RiderProfileSchema = new Schema({
    fname: {
        type: String,
        trim: true,
        required: true,
    },
    lname: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        lowercase: true,
    },
    mobile: {
        type: Number,
        trim: true,
        required: true,
        unique: true,
    },
    hashed_password: {
        type: String,
        required: true,
    },
    salt: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        default: "",
    },
    resetPasswordLink: {
        data: String,
        default: "",
    },
    promocode: {
        type: String,
        default: "",
    },
},
{ timestamps: true}
);

RiderProfileSchema.methods = {
    makeSalt: function() {
        return Math.round(new Date().valueOf() * Math.random() + "");
    },
    encryptPassword: function(password) {
        if(!password){
            return "";
        }
        try{
            return crypto.createHmac("sha1",this.salt).update(password).digest("hex");
        }
        catch(err){
            return err;
        }
    },
    authenticate: function(password){
        return this.encryptPassword(password) === this.hashed_password;
    },
};

RiderProfileSchema.virtual("password").set(
    function(password) {
        this._password = password;

        this.salt = this.makeSalt();

        this.hashed_password = this.encryptPassword(password);
    }
)
.get(
    function(){
        return this._password;
    }
);

module.exports = model("rider",RiderProfileSchema);
