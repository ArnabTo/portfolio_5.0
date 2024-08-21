import axios from "axios"

export const getAllProjects = async () => {
    const response = await axios.get('/api/get-projects');
    console.log(response.data);
    return response.data;
}