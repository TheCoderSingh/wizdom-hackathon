import User from "../models/User.js";

export const fetchUsers = async (req, res) => {
  try {
    const users = await User.find({}, "-password");

    res.status(200).json({
      users,
    });
  } catch (error) {}
};
