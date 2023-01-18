const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
// const USER = require("../models/User");

const user_detail = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
    },
    address: {
      type: String,
      required: true,
    },
    gender: {
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

const userDetail = mongoose.model("user_detail", user_detail);

module.exports = userDetail;
