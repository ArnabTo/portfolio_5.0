export const getAllProjects = async() =>{
    const res = await fetch('https://portfolio-5-0-server.vercel.app/allprojects')
    return res.json();
}