import bcrypt from "bcryptjs";
import User from "../models/User.js";
import jwt from 'jsonwebtoken'
import { Chat } from "openai/resources/index.mjs";
// gene jwt

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}

// api to register 
export const registerUser = async (req, res) => {
    const {name, email, password } = req.body;

    try {
        const userExits = await User.findOne({ email });

        if(userExits) {
            return res.json({success: false, message: "User already exits"})
        }

        const user = await User.create({ name, email, password })
        

        const token = generateToken(user._id)
        res.json({success: true, token})

    } catch (error){
        return res.json({success: false, message: error.message})
    }
}


//api to login

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try{
        const user = await User.findOne({ email });
        if(user){
            const isMatch = await bcrypt.compare(password, user.password)

            if(isMatch){
                const token = generateToken(user._id);
                return res.json({success: true, token})
            }
        }
        return res.json({success: false, message: "Invalid email or password"})

    }catch{
         return res.json({success: false, message: error.message})
    }

}

// api to get user data

export const getUser = async (req, res) => {
    try {
        const user = req.user;
        return res.json({success: true, user})
        
    } catch (error) {
         return res.json({success: false, message: error.message})
    }
}

//api to get published img..

export const getPublishedImages = async (req, res) => {
    try {
        const publishedImagesMessages = await Chat.aggregate([
            {$unwind: "$messages"},
            {
                $match: {
                    "messages.isImage": true,
                    "messages.isPublished": true
                }
            },
            {
              $project: {
                _id: 0,
                imageUrl: "$messages.content",
                userName: "$userName"
              }  
            }
        ])
        res.json({success: true, images: publishedImagesMessages.reverse()})
    } catch (error) {
        return res.json({success: false, message: error.message});
    }
}

