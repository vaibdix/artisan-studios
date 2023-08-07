import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

export const register = async (req, res, next) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 5); // 5 here is a salt val
    const newUser = new User({
      ...req.body,
      password: hash, // updates password with hash while registration
    });

    await newUser.save();
    res.status(201).send("user has been created");
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username }); // find username in mongodb

    if (!user) return next(createError(404, "user not found")); // no user found show 404

    const isCorrect = bcrypt.compareSync(req.body.password, user.password); // comparing login password with db pass with bcrypt
    if (!isCorrect) return next(createError(400, "wrong password or username"));

    const token = jwt.sign(
      {
        id: user._id,
        isSeller: user.isSeller,
      },
      process.env.JWT_KEY
    );

    const { password, ...info } = user._doc; // gives auth fail or pass details // _doc gives moongose obj of db so using gives precise info for req of that particular id

    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .send(info);
  } catch (err) {
    next(err);
    // res
    //     .status( 500 )
    //     .send( 'something went wrong' )
  }
};

export const logout = async (req, res) => {
  res
    .clearCookie("accessToken", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .send("User has been logged out");
};
