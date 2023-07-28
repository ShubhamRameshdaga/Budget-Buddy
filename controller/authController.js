//jshint esversion:9
import { comparePassword, hashPassword } from "../helper/authhelper.js";
import userSchema from "../models/userSchema.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { name, email, phone, address, work, password, cpassword } = req.body;
    if (!name) {
      return res.send({ message: "Name is Required" });
    }
    if (!email) {
      return res.send({ message: "Email is Required" });
    }
    if (!phone) {
      return res.send({ message: "Phone is Required" });
    }
    if (!address) {
      return res.send({ message: "Address is Required" });
    }
    if (!work) {
      return res.send({ message: "Work is Required" });
    }
    if (!password) {
      return res.send({ message: "Password is Required" });
    }
    if (!cpassword) {
      return res.send({ message: "Confirm Password is Required" });
    }
    const existinguser = await userSchema.findOne({ email });
    if (existinguser) {
      return res.status(200).send({
        success: false,
        message: "Already Registered please login",
      });
    }
    const hashedPassword = await hashPassword(password);
    const user = new userSchema({
      name,
      email,
      phone,
      work,
      address,
      password: hashedPassword,
      cpassword: hashedPassword,
    }).save();

    res.status(201).send({
      success: true,
      message: "User Register Succesfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500),
      send({
        success: false,
        message: "Error in Registration",
        error,
      });
  }
};

export const loginController = async (req, res) => {
  let token;
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(404).send({
        success: false,
        message: "Invalid login",
      });
    }
    const user = await userSchema.findOne({ email });
    if (!user) {
      res.status(404).send({
        success: false,
        message: "Email is not registered Please Register First",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }
    /*const token = user.generateAuthToken();
    console.log(token);
    res.cookie("jwtoken", token, {
      expires: new Date(Date.now() + 2589200000),
      httpOnly: true,
    });*/
    const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "login successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in Registration",
      error,
    });
  }
};
