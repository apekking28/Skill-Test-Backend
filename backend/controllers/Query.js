const USER = require("../models/User");
const UserDetail = require("../models/UserDetail");
const PRODUCT = require("../models/Product");
// const { MongoClient } = require();

const getUser = async (req, res) => {
  try {
    const get = await USER.find();
    res.json({ data: get });
  } catch (error) {
    res.json({ message: error });
  }
};

const getUserWithUserDetail = async (req, res) => {
  try {
    const get = await USER.aggregate([
      {
        $lookup: {
          from: "user_details",
          localField: "_id",
          foreignField: "user_id",
          as: "userDetail",
        },
      },
    ]);
    res
      .status(200)
      .json({ status: 200, message: "succsessfully get data", data: get });
  } catch (error) {
    res.status(422).json({ message: "error" });
  }
};

const getUserWithProduct = async (req, res) => {
  try {
    const get = await USER.aggregate([
      {
        $lookup: {
          from: "products",
          localField: "_id",
          foreignField: "user_id",
          as: "product",
        },
      },
    ]);
    res
      .status(200)
      .json({ status: 200, message: "succsessfully get data", data: get });
  } catch (error) {
    res.status(422).json({ message: "error" });
  }
};

module.exports = {
  getUserWithUserDetail,
  getUserWithProduct,
  getUser,
};
