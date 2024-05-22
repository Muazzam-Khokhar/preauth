import asynHandler from 'express-async-handler'
import provider from '../models/providerModel.js'

const getAllProviders = asynHandler(async(req,res)=>{
    const providers = await provider.find({})
    if(providers) {
        res.send(providers)
    }
    else{
        res.status(404);
        throw new Error('No Data');
    }
})

const getProviderById = asynHandler(async(req,res)=> {
    const providerById = await provider.findById(req.params.id)
    if(providerById){
        res.send(providerById)
    }
    else{
        res.status(404)
        throw new Error('No Provider Found')
    }
})

const addProvider = asynHandler(async(req,res)=>{
    try {
        const newProvider = new provider(req.body)
        await newProvider.save();
        res.status(201).json({ message: 'Provider added successfully', data: newProvider });
    } catch (error) {
        console.error("Error adding new Provider:", error);
        res.status(400).json({ message: 'Failed to add Provider', error });
    }
})

export {getAllProviders, getProviderById, addProvider}