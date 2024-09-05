import axios from "axios";

let baseUrl = 'http://localhost:5000/api/provider';

const getAllProviders = async () => {
    try {
        const res = await axios.get(baseUrl);
        console.log("respnose",res)
        return res.data;
    } catch (error) {
        console.error('Error Fetching Data', error);
        throw error
    }
}
export default getAllProviders