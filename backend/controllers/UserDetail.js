const UserDetail = require("../models/UserDetail");

const addUserDetails = async (req, res) => {
  const { first_name, last_name, address, gender, image, user_id } = req.body;
  const oldName = await UserDetail.findOne({
    $or: [{ first_name: first_name }, { last_name: last_name }],
  });
  try {
    if (oldName) {
      return res.json({ message: "User already exist" });
    }
    if (!first_name || !last_name || !address || !gender) {
      return res.json({ message: "You must add all the field" });
    }
    const userDetail = await UserDetail.create({
      first_name,
      last_name,
      address,
      gender,
      image,
      user_id,
    });

    res
      .status(200)
      .json({ message: "succsessfully add Detail user", data: userDetail });
  } catch (error) {
    res.status(422).send({ message: "error" });
  }
};

const getUserDetail = async (req, res) => {
  try {
    const userDetail = await UserDetail.find();
    res
      .status(200)
      .json({ message: "succsessfully get Detail user", data: userDetail });
  } catch (error) {
    res.status(422).send({ message: "error" });
  }
};

const updatedUserDetail = async (req, res) => {
  const { first_name, last_name, address, gender } = req.body;
  const oldName = await UserDetail.findOne({
    $or: [{ first_name: first_name }, { last_name: last_name }],
  });
  try {
    if (!first_name || !last_name || !address || !gender) {
      return res.json({ message: "You must add all the field" });
    } else if (oldName) {
      return res.json({ message: "User already exist" });
    }
    const updated = await UserDetail.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.json({
      status: 200,
      message: "succsessfully updated data",
      updated: req.params.id,
      data: updated,
    });
  } catch (error) {
    res.status(422).json({
      message: "error",
    });
  }
};

const deletedUserDetail = async (req, res) => {
  try {
    const deletedUserDetail = await UserDetail.deleteOne({
      _id: req.params.id,
    });
    res.json({
      status: 200,
      message: "succsessfully deleted data",
      deleted: req.params.id,
      data: deletedUserDetail,
    });
  } catch (error) {
    res.status(422).json({
      message: "error",
    });
  }
};

module.exports = {
  addUserDetails,
  getUserDetail,
  updatedUserDetail,
  deletedUserDetail,
  deletedUserDetail,
};
