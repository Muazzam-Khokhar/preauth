import axios from "axios";

let baseUrl = 'http://localhost:5000/api/preauth';

const getProviderById = async (id) => {
    try {
        if(!id) return;
        const res = await axios.get(`${baseUrl}/${id}`);
        return res.data;
    } catch (error) {
        console.error('Error fetching provider by ID', error);
        throw error
    }
}
export default getProviderById