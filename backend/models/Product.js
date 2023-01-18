const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const Product = new mongoose.Schema(
  {
    name_product: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: "no photo",
    },
    user_id: {
      type: ObjectId,
      ref: "USER",
    },
  },
  {
    timestamps: true,
  }
);

const PRODUCT = mongoose.model("product", Product);

module.exports = PRODUCT;
