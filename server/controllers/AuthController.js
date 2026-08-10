import User from "../models/User.js";
import {OAuth2Client} from "google-auth-library"

const client = new OAuth2Client(
    process.env.GOOGLE_CLIENT_ID
)

export const googleLogin = async (req, res) => {

    try {

        const { credential } = req.body;

        const ticket = await client.verifyIdToken({
            idToken: credential,
            audience: process.env.GOOGLE_CLIENT_ID
        });

        const payload = ticket.getPayload();

        const {sub,name,email,picture} = payload

        let user = await User.findOne({googleId : sub})

        if(!user){
            user = new User({
                googleId : sub,
                name,
                email,
                picture
            })
            await user.save()
        }

        res.json({
            success: true,
            message : "Google login successful",
            user
        });

    } catch (error) {

        res.status(401).json({
            success: false,
            message: error.message
        });
    }
};