const { default: mongoose } = require("mongoose");


const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      github: {
        type: String,
        required: true,
      },
      live: {
        type: String,
        required: true,
      },
      technologies: {
        type: [String], 
        required: true,
      },
      createdAt: { type: Date, default: Date.now }, 
},{
    collection: 'projectCollection'
})

const Project = mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;