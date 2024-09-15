import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    max: 255,
  },
  password: {
    type: String,
    required: true,
    max: 1024, //store hashes
    min: 6,
  },
  token: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  image: {
    type: String,
    default: "https://placehold.co/400x600",
  },
});

const User = model("User", UserSchema);
export default User;
