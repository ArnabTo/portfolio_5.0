import axios from "axios";

export default async function fetchProjects() {

    const baseUrl = process.env.NODE_ENV === 'production' 
    ? 'https://arsdevs.vercel.app' 
    : 'http://localhost:3000';

    console.log(baseUrl)

    try {
        const response = await axios.get(`${baseUrl}/api/get-latest-projects`);
        console.log(response.data)
        if (response.data.success) {
            return response.data.data;
        } else {
         throw new Error(response.data.message || 'Failed to fetch projects');
        }
    } catch (error) {
     return error;
    } 
};
