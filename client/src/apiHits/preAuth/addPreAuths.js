import axios from "axios";

const baseUrl = 'http://localhost:5000/api/preauth';

const addProvider = async (newProvider) => {
    try {
        if(!newProvider) return;
        const res = await axios.post(baseUrl, newProvider);
        return res.data;
    } catch (error) {
        console.error('Error adding new Provider', error);
        throw error;
    }
}

export default addProvider;
