let mongoose = require("../db/connection")


let authorSchema = new mongoose.Schema({
    firstName: String,
    lastName: {
        type: String,
        minlength: 2,
        maxlength: 25
      },
    age : Number
  })


  let Author = mongoose.model("Author", authorSchema)


  module.exports = Author;