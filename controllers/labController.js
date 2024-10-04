import Labs from "../models/LabModel.js";
import User from "../models/UserModel.js";

export const labTest = (req, res) => {
    res.json({
        message: "Lab test successful",
    });
}

export const createLab = async (req, res) => {
    const { labName, pocName, pocEmail, pocPhone, address, profilePic } = req.body;

    const newLab = new Labs({
        labName,
        pocName,
        pocEmail,
        pocPhone,
        address,
        profilePic
    })

    const newUser = new User({
        name: pocName,
        email: pocEmail,
        password: pocPhone,
        profilePic,
        lab: newLab._id,
        role: 'labOwner'
    })

    await newUser.save()

    await newLab.save()

    return res.status(200).json({
        success: true,
        status: 200,
        message: "Lab added successfully",
        newLab
    });
}

export const getAllLabs = async (req, res) =>{
    const labs = await Labs.find({});

    return res.status(200).json({
        success: true,
        status: 200,
        labs
    });
}
// get lab