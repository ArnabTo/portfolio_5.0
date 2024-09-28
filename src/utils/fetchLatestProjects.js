import axios from "axios";

export default async function fetchProjects() {

    try {
        const response = await axios.get('/api/get-latest-projects', { cache: 'no-store' });
        if (response.data.success) {
            return response.data.data;
        } else {
         throw new Error(response.data.message || 'Failed to fetch projects');
        }
    } catch (error) {
     return error;
    } 
};
