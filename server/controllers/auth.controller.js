import { User } from "../models/userModel.js";

export async function login(req, res) {
  res.json({
    success: true,
    message: "User login...",
  });
}

export async function signup(req, res) {
  const { userName, userPassword, userBackupCode } = req.body;

  try {
    const userProfile = await User.signUp(
      userName,
      userPassword,
      userBackupCode
    );

    res.json({
      success: true,
      message: "New user created!",
      profile: userProfile,
    });
  } catch (e) {
    res.json({
      success: false,
      message: e.message,
    });
  }
}
