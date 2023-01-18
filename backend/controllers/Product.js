const PRODUCT = require("../models/Product");

const addProduct = async (req, res) => {
  const { name_product, price, description, image, user_id } = req.body;
  const oldName = await PRODUCT.findOne({
    name_product: name_product,
  });
  try {
    if (oldName) {
      return res.json({ message: " Product already exist" });
    }
    if (!name_product || !price || !description) {
      return res.json({ message: "You must add all the field" });
    }
    const product = await PRODUCT.create({
      name_product,
      price,
      description,
      user_id,
    });

    res.status(200).json({
      message: "succsessfully add Product",
      user_id: user_id,
      data: product,
    });
  } catch (error) {
    res.status(422).send({ message: "error" });
  }
};

const getProduct = async (req, res) => {
  try {
    const userDetail = await PRODUCT.find();
    res
      .status(200)
      .json({ message: "succsessfully get Detail user", data: userDetail });
  } catch (error) {
    res.status(422).send({ message: "error" });
  }
};

const updatedProduct = async (req, res) => {
  const { name_product, price, description, image } = req.body;
  const oldName = await PRODUCT.findOne({
    name_product: name_product,
  });
  try {
    if (oldName) {
      return res.json({ message: " Product already exist" });
    }
    if (!name_product || !price || !description) {
      return res.json({ message: "You must add all the field" });
    }
    const updatedProduct = await PRODUCT.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.json({
      status: 200,
      message: "succsessfully updated Product",
      updated: req.params.id,
      data: updatedProduct,
    });
  } catch (error) {
    res.status(422).json({
      message: "error",
    });
  }
};

const deletedProduct = async (req, res) => {
  try {
    const deletedProduct = await PRODUCT.deleteOne({
      _id: req.params.id,
    });
    res.json({
      status: 200,
      message: "succsessfully deleted Product",
      deleted: req.params.id,
      data: deletedProduct,
    });
  } catch (error) {
    res.status(422).json({
      message: "error",
    });
  }
};

module.exports = { addProduct, getProduct, updatedProduct, deletedProduct };
