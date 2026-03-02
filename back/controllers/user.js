import argon2 from "argon2";
import jwt from "jsonwebtoken";
import { registerUserM } from "../modules/user.js";

// creates and returns jwt token

const signToken = (id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  return token;
};

// writes jwt cookie to front

const sendTokenCookie = (token, res) => {
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000,
    ),
    httpOnly: true,
  };

  res.cookie("jwt", token, cookieOptions);
};

// -----------------USER_CONTROLLERS--------------------

// register a user

export const registerUserC = async (req, res, next) => {
  try {
    const newUser = req.body;

    const hash = await argon2.hash(newUser.password);

    newUser.password = hash;

    const createdUser = await registerUserM(newUser);

    if (!createdUser) {
      throw new AppError("User was not created", 404);
    }

    //hide password from client
    createdUser.password = undefined;

    res.status(201).json({
      status: "success",
      data: createdUser,
    });
  } catch (error) {
    next(err);
  }
};
