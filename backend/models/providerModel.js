import mongoose from "mongoose";

const providerSchema = mongoose.Schema({
    name: {
        type: String,
        requrie: true,
    },
    phoneNumber: {
        type: Number,
        requrie: true,
    },
    address: {
        type: String,
        requrie: true,
    },
    city: {
        type: String,
        requrie: true,
    },
    zipCode: {
        type: String,
        requrie: true,
    },
    province: {
        type: String,
        requrie: true,
    },
    licenseNumber: {
        type: String,
        requrie: true,
    },
}, {
    timeStamps: true,
})

const provider = mongoose.model('providers', providerSchema)

export default provider