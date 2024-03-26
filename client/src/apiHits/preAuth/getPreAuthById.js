import axios from "axios";

let baseUrl = 'http://localhost:5000/api/preauth';

const getPreAuthById = async (id) => {
    try {
        if(!id) return;
        const res = await axios.get(`${baseUrl}/${id}`);
        return res.data;
    } catch (error) {
        console.error('Error fetching preAuth by ID', error);
        throw error
    }
}
export default getPreAuthById