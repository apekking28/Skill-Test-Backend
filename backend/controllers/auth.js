const express = require("express");
const USER = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Jwt_secret } = require("../keys");
const nodemailer = require("nodemailer");

// const requireLogin = require("../middlewares/requireLogin");

const signUp = async (req, res) => {
  const { name, email, password, phone_number } = req.body;
  const oldName = await USER.findOne({ email: email });
  try {
    if (!name || !email || !password || !phone_number) {
      return res.json("You must add all the field");
    } else if (oldName) {
      return res.json("User already exists");
    }
    const ecryptedPassword = await bcrypt.hash(password, 10);
    let user = await USER.create({
      name,
      email,
      password: ecryptedPassword,
      phone_number,
    });
    res
      .status(200)
      .json({ message: "succsessfully add User", userId: user.id });
  } catch (error) {
    res.status(422).send({ status: 422, message: "error" });
  }
};

const signIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await USER.findOne({ email: email });

  try {
    if (!user) {
      return res.json({ error: "User not found" });
    } else if (!email || !password) {
      return res.json("You must add all the field");
    }

    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ email: user.email }, Jwt_secret);

      if (res.status(201)) {
        return res.json({
          status: "succsefully login",
          token: token,
          user_id: user._id,
        });
      } else {
        return res.json({ error: "error" });
      }
    }
  } catch (error) {
    res.status(422).send({ status: 422, message: "error" });
  }
};

const forgot = async (req, res) => {
  try {
    const user = await USER.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ message: "Email Already exist" });
    }

    const token = jwt.sign({ _id: user._id }, Jwt_secret, {
      expiresIn: "1h",
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "terserah@gmail.com",
        pass: "your-email-password",
      },
    });
    const mailOptions = {
      from: "mantab@gmail.com",
      to: req.body.email,
      subject: "Reset Password",
      html: `<p>Klik <a href="http://localhost:3000/resetpassword/${token}">link ini</a> untuk mereset password Anda</p>`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return res.status(400).json({ message: "Gagal mengirim email" });
      }
      console.log("Email sent: " + info.response);
      return res
        .status(200)
        .json({ message: "Email reset password berhasil dikirim" });
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { signUp, signIn, forgot };
