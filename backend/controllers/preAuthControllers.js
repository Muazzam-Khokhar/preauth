import asyncHandler from "express-async-handler";
import preAuth from "../models/preAuthModel.js";


const getPreAuth = asyncHandler(async (req, res) => {
    const preAuthh = await preAuth.find({})
    if (preAuthh) {
        res.send(preAuthh)
    }
    else {
        res.status(404);
        throw new Error('No Data');
    }
})

const getPreAuthByID = asyncHandler(async (req, res) => {
    const preAuthh = await preAuth.findById(req.params.id)
    if (preAuthh) {
        res.json(preAuthh)
    }
    else {
        res.status(404);
        throw new Error('No PreAuth Found');
    }
})

const addPreAuth = asyncHandler(async (req, res) => {
    try {
        console.log("Adding new preAuth:", req.body);
        
        const newPreAuth = new preAuth(req.body);
        await newPreAuth.save();
        
        console.log("PreAuth added successfully:", newPreAuth);
        res.status(201).json({ message: 'PreAuth added successfully', data: newPreAuth });
    } catch (error) {
        console.error("Error adding new preAuth:", error);
        res.status(400).json({ message: 'Failed to add preAuth', error });
    }
});

export{ getPreAuth, getPreAuthByID, addPreAuth}