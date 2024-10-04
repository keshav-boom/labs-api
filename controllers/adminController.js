import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs';
import Admin from '../models/adminModel.js';

export const Test = async (req, res) => {
    res.json({
        msg: "hhihi"
    })
}

export const RegisterAdmin = async (req, res) => {
    const { name, email, password } = req.body;
    const userExists = await Admin.findOne({ email })
    if (userExists) {
        return res.status(400).json({
            message: 'User already exists',
            success: false
        });
    }
    const hashedPassword = await bcrypt.hashSync(password, 12);
    const newAdmin = await Admin.create({ name, email, password: hashedPassword });
    return res.json({
        message: 'User Registered',
        newAdmin,
        success: true
    });
}

export const LoginAdmin = async (req, res) => {
    const { email, password } = req.body;

    const curAdmin = await Admin.findOne({ email });
    if (!curAdmin) {
        return res.status(400).json({
            message: 'Invalid Credentials',
            success: false
        });
    };

    console.log('curAdmin', curAdmin)

    const isPasswordCorrect = await bcrypt.compare(password, curAdmin.password);
    if (!isPasswordCorrect) {
        return res.status(400).json({
            message: 'Invalid Credentials',
            success: false
        });
    }

    const token = jwt.sign({ id: curAdmin._id }, 'keshav');

    return res.json({ message: 'User Logged In', success: true, token });
}

export const verifyAdmin = async (req, res) => {
    const { token } = req.body;
    if (!token) {
        return res.status(400).json({
            message: 'Invalid Token',
            success: false
        });
    } try {
        const decoded = jwt.verify(token, 'keshav');
        const userId = decoded.id;

        const user = await Admin.findById(userId);

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