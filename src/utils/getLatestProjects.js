import axios from "axios"

export const getLatesstProjects = async () => {

    try {
        const response = await axios.get('http://localhost:3000/api/get-latest-projects');
        console.log(response.data);
        
        return response.data;
    } catch (error) {
        console.log(error);
        return error
    }
}