const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchama = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true}
})