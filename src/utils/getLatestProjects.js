export const getLatesstProjects = async () =>{
    const res = await fetch('https://portfolio-5-0-server.vercel.app/projects')
    return res.json();
}