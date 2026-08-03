import User from "../models/User.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
    try {
        const existUser = await User.findOne({ email: req.body.email })
        if (existUser) {

           return res.status(409).json({
                success: false,
                message: "Email already exists"
            })
        }

        const hashedPassword = await bcrypt.hash(req.body.password,10)
        const newUser = new User({
            username : req.body.username,
            email : req.body.email,
            password : hashedPassword
        });
        await newUser.save()
        res.status(201).json({
            success: true,
            message: "User registered successfully"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
