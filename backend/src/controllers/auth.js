import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

import { messages } from "../messages/lang/en/user.js";
import User from "../models/User.js";

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // store the user in db
    const user = new User({
      name: name,
      email: email,
      password: hashedPassword,
    });
    await user.save();

    res.send({ user: user._id });
  } catch (err) {
    res.status(400).send(err);
  }
};

export const loginUser = async (req, res) => {
  const user = await User.findById(req.userId);
  if (!user) {
    console.error("User not found for the provided email. Please try again.");
    res.status(400).send({
      message: messages.userNotFound,
    });
    return;
  }

  // Create and assign a JWT
  const environment = process.env.NODE_ENV?.trim().toString();
  const token = jwt.sign({ id: req.userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });

  // update user token in db
  user.token = token;
  await user.save();

  res.header("Authorization", `Bearer ${token}`);
  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
    domain: environment === "development" ? "localhost" : ".example.com",
    sameSite: "none",
  });
  res.send({
    status: 200,
    message: messages.userLoginSuccess,
    id: user._id,
    name: user.name,
  });
};
