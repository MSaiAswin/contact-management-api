const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please add the username"]
    },
    email: {
        type: String,
        required: [true, "Please add user email address"],
        uniqu: [true, "Email address already exists"]
    },
    password: {
        type: String,
        required: [true, "Please add the user password"]
    },
},
{
    timesamps: true,
})

module.exports = mongoose.model("User", userSchema)