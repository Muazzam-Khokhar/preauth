import mongoose from "mongoose";

const preAuthScheme = mongoose.Schema({
    location: {
        type: String,
        required: true,
    },
    providerName: {
        type: String,
        required: true,
    },
    patientName: {
        type: String,
        required: true,
    },
    patientPhone: {
        type: Number,
        required: true,
    },
    procedureCode: {
        type: String,
        required: true,
    },
    patientDateOfBrith: {
        type: Date,
        required: true,
    },
    patientDateOfBrith: {
        type: String,
        required: false,
    },
    additionalComment: {
        type: String,
        required: false,
    }
    
}, {
    timestamps: true,
})

const preAuth = mongoose.model('preauth', preAuthScheme)

export default preAuth