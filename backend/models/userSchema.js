//jshint esversion:9
import mongoose from "mongoose";
import JWT from "jsonwebtoken";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    address: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    work: {
      type: String,
      required: true,
    },
    cpassword: {
      type: String,
      required: true,
    },
    /*tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
    */
  },
  { timestamps: true }
);
/*
userSchema.methods.generateAuthToken = async function () {
  try {
    let token = JWT.sign({ _id: this._id }, process.env.JWT_SECRET);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (error) {
    console.log(error);
  }
};
*/

export default mongoose.model("users", userSchema);
