import Joi from "joi";
import { apiResponseCode } from "../helper.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../config.js";

// Middleware to verify JWT
function authenticateToken(req, res, next) {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        return res.status(401).json({
            responseCode: apiResponseCode.AUTH_MISSING,
            responseMessage: "Authorization token is missing",
        });
    }

    jwt.verify(token, config.jwtSecret, (err, user) => {
        if (err) {
            return res.status(403).json({
                responseCode: apiResponseCode.EXPIRED_TOKEN,
                responseMessage: "Invalid or expired token",
            });
        }
        req.user = user;
        next();
    });
}

const updatePassword = async (req, res) => {
    try {
        // Ensure the token is authenticated before proceeding
        authenticateToken(req, res, async () => {
            const { newPassword } = req.body;
            if (!newPassword) {
                return res.status(400).json({ 
                    responseCode: apiResponseCode.BAD_REQUEST, 
                    responseMessage: "New password is required" 
                });
            }

            const hashedPassword = await bcrypt.hash(newPassword, 10);
            await User.findByIdAndUpdate(req.user.id, { password: hashedPassword });

            res.status(200).json({ 
                responseCode: apiResponseCode.SUCCESSFUL, 
                responseMessage: "Password updated successfully"
            });
        });
    } catch (error) {
        res.status(500).json({
            responseCode: apiResponseCode.INTERNAL_SERVER_ERR,
            responseMessage: "Internal Server Error",
            error: error.message
        });
    }
}

const updateProfile = async (req, res) => {
    try {
        // Ensure the token is authenticated before proceeding
        authenticateToken(req, res, async () => {
            const { username, fullName, email, phoneNumber } = req.body;

            // Check if any fields are provided for updating
            if (!username && !fullName && !email && !phoneNumber) {
                return res.status(400).json({
                    responseCode: apiResponseCode.BAD_REQUEST,
                    responseMessage: "At least one field is required to update"
                });
            }

            // Find the user by ID from the authenticated token
            const user = await User.findById(req.user.id);
            if (!user) {
                return res.status(404).json({
                    responseCode: apiResponseCode.MISSING_DETAILS,
                    responseMessage: "User not found"
                });
            }

            // Update the fields that are provided in the request body
            if (username) user.username = username;
            if (fullName) user.fullName = fullName;
            if (email) user.email = email;
            if (phoneNumber) user.phoneNumber = phoneNumber;

            // Save the updated user to the database
            await user.save();

            res.status(200).json({
                responseCode: apiResponseCode.SUCCESSFUL,
                responseMessage: "Profile updated successfully",
                data: {
                    fullName: user.fullName,
                    username: user.username,
                    email: user.email,
                    phoneNumber: user.phoneNumber
                }
            });
        });
    } catch (error) {
        res.status(500).json({
            responseCode: apiResponseCode.INTERNAL_SERVER_ERR,
            responseMessage: "Internal Server Error",
            error: error.message
        });
    }
}

const getAllUsersCount = async (req, res) => {
    try {
        // Ensure the token is authenticated before proceeding
        authenticateToken(req, res, async () => {
            // Count the total number of users in the database
            const userCount = await User.countDocuments();

            res.status(200).json({
                responseCode: apiResponseCode.SUCCESSFUL,
                responseMessage: "Number of users retrieved successfully",
                data: {
                    totalUsers: userCount
                }
            });
        });
    } catch (error) {
        res.status(500).json({
            responseCode: apiResponseCode.INTERNAL_SERVER_ERR,
            responseMessage: "Internal Server Error",
            error: error.message
        });
    }
}

const getUserProfile = async (req, res) => {
    try {
        // Ensure the token is authenticated before proceeding
        authenticateToken(req, res, async () => {
            // Retrieve the user ID from the request parameters
            const { _id } = req.params;

            // Find the user by ID in the database
            const user = await User.findById(_id);

            // Check if the user exists
            if (!user) {
                return res.status(404).json({
                    responseCode: apiResponseCode.MISSING_DETAILS,
                    responseMessage: "User not found"
                });
            }

            // Return the user's profile details
            res.status(200).json({
                responseCode: apiResponseCode.SUCCESSFUL,
                responseMessage: "User profile retrieved successfully",
                data: {
                    fullName: user.fullName,
                    username: user.username,
                    email: user.email,
                    phoneNumber: user.phoneNumber,
                    role: user.role
                }
            });
        });
    } catch (error) {
        res.status(500).json({
            responseCode: apiResponseCode.INTERNAL_SERVER_ERR,
            responseMessage: "Internal Server Error",
            error: error.message
        });
    }
}


export { authenticateToken, updatePassword, updateProfile, getAllUsersCount, getUserProfile };
