import User from "../models/UserModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs';

export const LoginUser = async (req, res) => {
    const { email, password } = req.body;

    const currUser = await User.findOne({ email });
    console.log('currUser', currUser)
    if (!currUser) {
        return res.status(400).json({
            message: 'Invalid Credentials',
            success: false
        });
    };

    if(currUser.password !== password){
        return res.status(400).json({
            message: 'Invalid Credentials',
            success: false
        });
    }

    const token = jwt.sign({ id: currUser._id }, 'keshav');

    return res.json({ message: 'User Logged In', success: true, token });
}

export const verifyUser = async (req, res) => {
    const { token } = req.body;
    if (!token) {
        return res.status(400).json({
            message: 'Invalid Token',
            success: false
        });
    } try {
        const decoded = jwt.verify(token, 'keshav');
        const userId = decoded.id;

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({
                message: 'User not found',
                success: false
            });
        }

        return res.status(200).json({
            message: 'User Info',
            success: true,
            user
        });

    } catch (error) {
        console.error(error);
        return res.status(401).json({
            message: 'Unauthorized',
            success: false
        });
    }
}