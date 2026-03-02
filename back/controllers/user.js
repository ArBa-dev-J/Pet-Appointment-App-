import argon2 from "argon2";
import jwt from "jsonwebtoken";
import {
  registerUserM,
  getUserByEmailM,
  getUserByIdM,
} from "../modules/user.js";
import AppError from "../utils/appError.js";

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

    if (
      !newUser.fullName ||
      !newUser.userName ||
      !newUser.password ||
      !newUser.emailAddress
    ) {
      throw new AppError("Not enough info", 400);
    }

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
    next(error);
  }
};

//get all users

// export const getAllUsersC = async (req, res, next) => {
//   try {
//     const userList = await getAllUsersM();

//     if (userList.length === 0) {
//       throw new AppError("No tours found", 404);
//     }

//     userList.password = undefined;

//     res.status(200).json({
//       status: "success",
//       data: userList,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// login and writes jwt token
export const loginC = async (req, res, next) => {
  try {
    const { emailAddress, password } = req.body;

    const user = await getUserByEmailM(emailAddress);
    if (!user) throw new AppError("Invalid user email or password", 401);

    const passwordCorrect = await argon2.verify(user.password, password);

    if (!passwordCorrect)
      throw new AppError("Invalid user email or password", 401);

    const token = signToken(user.userId);
    sendTokenCookie(token, res);

    user.password = undefined;

    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (err) {
    next(err);
  }
};

//autorizacijos middleware, routes apsaugai nuo neregistruotų vartotojų
export const protect = async (req, res, next) => {
  try {
    let token = req.cookies?.jwt;

    if (!token) {
      throw new AppError("You are not logged in! Please log in to get access");
    }

    const decodedUser = jwt.verify(token, process.env.JWT_SECRET);

    const currentUser = await getUserByIdM(decodedUser.id);

    if (!currentUser) {
      throw new AppError(
        "The user belonging to this token does not longer exist",
        401,
      );
    }

    req.user = currentUser;

    next();
  } catch (err) {
    next(err);
  }
};

//logout user
export const logout = (req, res) => {
  return res.clearCookie("jwt").status(200).json({
    status: "success",
    message: "Your are now logged out",
  });
};
