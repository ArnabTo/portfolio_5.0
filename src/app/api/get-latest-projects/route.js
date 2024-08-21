import connectDB from "@/lib/connectDB";
import Project from "@/model/ProjectModel";

export async function GET() {
    await connectDB();

    try {
        const projects = await Project.find().sort({ createdAt: -1 }).limit(4);

        if (!projects || projects.length === 0) {
            return new Response(JSON.stringify({
                success: false,
                message: 'No projects found'
            }), { status: 404 })
        }
        return new Response(JSON.stringify({
            success: true,
            message: 'Latest projects fetched successfully',
            data: projects
        }), { status: 200 })
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({
            success: false,
            message: error.message
        }), { status: 500 })
    }
}