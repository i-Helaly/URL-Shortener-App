const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/url_app")
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

const urlSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  alias: {
    type: String,
    
  },
});
const Url = mongoose.model('Url' , urlSchema );

module.exports = Url