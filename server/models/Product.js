let mongoose = require("../db/connection")


let productSchema = new mongoose.Schema({
    id: Number,
    title: String,
    description : String,
    price : Number,
    discountPercentage: Number,
    rating : Number,
    stock : Number,
    brand : String,
    category : String,
    thumbnail : String,
    images : Array,
  })


  let Product = mongoose.model("Product", productSchema)


  module.exports = Product;