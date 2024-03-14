import { json } from "express";
import User from "../models/user.model.js";

export const signup = async (req, res) => {
    try {
        const { fullname, username, password, confirmPassword, gender } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords don`t match" })
        }

        const user = await User.findOne({ username })

        if (user) {
            return res.status(400).json({error: "User already exists"})
        }

        // HASH password here

        // avatar: https://avatar.iran.liara.run/public/boy

        const boyProfilPic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilPic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            fullname,
            username,
            password,
            gender,
            profilePic: gender === "male" ? boyProfilPic : girlProfilPic
        })

        await newUser.save();

        res.status(201).json({
            _id: newUser._id,
            fullname: newUser.fullName,
            username: newUser.username,
            profilePic: newUser.profilePic
        })
    } catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({error: "Internal Server Error"})
    }
    console.log("signupUser");
};

export const login = (req, res) => {
    res.send("loginUser")
    console.log("loginUser");
};

export const logout = (req, res) => {
    res.send("logoutUser")
    console.log("logoutUser");
};
