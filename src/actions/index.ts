"use server";

import connectToDB from "@/lib/db";
import bcryptjs from "bcryptjs";
import jwt, { JwtPayload } from "jsonwebtoken";
import { cookies } from "next/headers";
import { TLoginForm, TSignUpForm } from "@/lib/types";
import User from "@/models/User";

const secretKey = "JWT123";

export async function signUpAction(formData: TSignUpForm) {
  await connectToDB();
  try {
    const { username, email, password } = formData;

    const checkUser = await User.findOne({ email });
    console.log(checkUser);
    if (checkUser) {
      return {
        success: false,
        message: "User already exists ! Please try with different email",
      };
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newlyCreatedUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newlyCreatedUser.save();

    if (savedUser) {
      const createdTokenData = {
        id: savedUser._id,
        username: savedUser.username,
        email: savedUser.email,
      };

      const token = jwt.sign(createdTokenData, secretKey, {
        expiresIn: "1d",
      });

      const getCookies = cookies();
      getCookies.set("token", token);
      return {
        success: true,
        data: JSON.parse(JSON.stringify(savedUser)),
      };
    } else {
      return {
        success: false,
        message: "Something went wrong! Please try again",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      message: "Something error occured",
      success: false,
    };
  }
}

export async function loginAction(formData: TLoginForm) {
  await connectToDB();
  try {
    const { email, password } = formData;

    //check if user exists in DB
    const checkUser = await User.findOne({ email });
    if (!checkUser) {
      return {
        success: false,
        message: "User doesnot exist ! please sign up",
      };
    }

    //check if password is valid or not
    const checkPassword = await bcryptjs.compare(password, checkUser.password);
    if (!checkPassword) {
      return {
        message: "Password is incorrect please check",
        success: false,
      };
    }

    const createdTokenData = {
      id: checkUser._id,
      username: checkUser.username,
      email: checkUser.email,
    };

    const token = jwt.sign(createdTokenData, secretKey, {
      expiresIn: "1d",
    });

    const getCookies = cookies();
    getCookies.set("token", token);

    return {
      success: true,
      data: {
        id: checkUser._id,
        username: checkUser.username,
        email: checkUser.email,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Something went wrong! please try again",
    };
  }
}

export async function logoutAction() {
  const getCookies = cookies();
  getCookies.set("token", "");
}

export async function fetchUserDetailsAction() {
  await connectToDB();
  try {
    const getCookies = cookies();
    const token = getCookies.get("token")?.value || "";
    if (token === "") {
      return {
        success: false,
        message: "Token is invalid",
      };
    }

    const decodedToken = jwt.verify(token, secretKey);
    const userId = (decodedToken as JwtPayload)?.id;

    if (!userId) {
      return {
        success: false,
        message: "Token does not contain a valid user ID",
      };
    }

    const getUserInfo = await User.findOne({ _id: userId });
    if (getUserInfo) {
      return {
        success: true,
        data: {
          id: getUserInfo._id,
          username: getUserInfo.username,
          email: getUserInfo.email,
        },
      };
    } else {
      return {
        success: false,
        message: "Some error occured ! Please try again",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Something went wrong! please try again",
    };
  }
}
