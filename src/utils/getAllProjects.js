import axios from "axios"

export const getAllProjects = async () => {
    const response = await axios.get('https://arsdevs.vercel.app/api/get-projects');

    if(response.data.success === false) {
        throw new Error(response.data.message);
    }
    return response.data;
}