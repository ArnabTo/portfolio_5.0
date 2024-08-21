import connectDB from "@/lib/connectDB";
import Project from "@/model/ProjectModel";

export async function GET(request) {
    await connectDB();

    try {
        const projects = await Project.find();

        if (projects.length === 0) {
            return new Response("No projects found", { status: 404 });
        }
        return new Response(
            JSON.stringify({
                success: true,
                message: 'Projects fetched successfully',
                data: projects
            }), {
            status: 200
        });
    } catch (error) {
        return new Response(
            JSON.stringify({
                success: true,
                message: error.message,
            }), {
            status: 500
        });
    }
}