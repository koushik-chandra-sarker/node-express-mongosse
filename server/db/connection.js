let mongoose = require("mongoose")

let mongooseConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
mongoose.connect("mongodb://127.0.0.1:27017/Test", mongooseConfig)
.then(()=>console.log('connected'))
.catch(e=>console.log(e));
module.exports = mongoose