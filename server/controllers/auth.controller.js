import User from '../models/userModel.js'

export async function getUser(req, res) {
    res.json({
        success: true,
        message: "User's data fetched successfully!",
    });
}