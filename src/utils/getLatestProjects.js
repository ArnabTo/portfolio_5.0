import axios from "axios"

export const getLatesstProjects = async () => {
    const response = await axios.get('https://arsdevs.vercel.app/api/get-latest-projects');
    
    if(response.data.success === false) {
        throw new Error(response.data.message);
    }
    return response.data;
}