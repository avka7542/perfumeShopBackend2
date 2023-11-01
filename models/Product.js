const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const product_schema = new Schema({
  product_name: {
    type: String,
    required: true,
    unique: true
  },

  product_description: {
    type: String,
  },

  product_onsale: {
    type: Number,
  },

  product_price: {
    type: Number,
    required: true,
    min: [1,"must be positive"]
  },

  product_image: {
    type: String,
    match: [/\.(jpg|jpeg|png)$/i, "must be a valid image link"],
  },

  categories: [
    {
        type:mongoose.Types.ObjectId,
        ref:'Categories'
    }
  ]
});

product_schema.plugin(uniqueValidator, { message: 'Error, allready exists {PATH} with this value : {VALUE}' });

module.exports = mongoose.model("Products", product_schema);
