import User from "../models/User.js";

export const register = async (req, res) => {
    try {
        const existUser = await User.findOne({ email: req.body.email })
        if (existUser) {

           return res.status(409).json({
                success: false,
                message: "Email already exists"
            })
        }

        const newUser = new User(req.body);
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
