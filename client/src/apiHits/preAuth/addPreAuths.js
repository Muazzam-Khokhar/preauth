import axios from "axios";

const baseUrl = 'http://localhost:5000/api/preauth';

const addPreAuths = async (newPreAuth) => {
    try {
        if(!newPreAuth) return;
        const res = await axios.post(baseUrl, newPreAuth);
        return res.data;
    } catch (error) {
        console.error('Error adding new preAuth', error);
        throw error;
    }
}

export default addPreAuths;
