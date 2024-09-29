import React, { useContext } from 'react';
import { ResumeContext } from '../Context/Context'; // Adjust the path if necessary

const ProjectForm = () => {
  const { projects, setProjects } = useContext(ResumeContext); // Use context for projects

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const newProjects = [...projects];
    newProjects[index][name] = value;
    setProjects(newProjects); // Update context state
  };

  const handleAddProject = () => {
    setProjects([...projects, { title: '', description: '', liveLink: '', githubLink: '', technologies: '' }]); // Add new project entry
  };

  const handleDeleteProject = (index) => {
    const newProjects = projects.filter((_, i) => i !== index);
    setProjects(newProjects); // Update context state
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted Projects:', projects); // Handle submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto p-4">
      {projects.map((project, index) => (
        <div key={index} className="mb-6 border-b pb-4">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor={`title-${index}`}>
              Project Title
            </label>
            <input
              type="text"
              name="title"
              value={project.title}
              onChange={(event) => handleChange(index, event)}
              placeholder="Enter project title"
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor={`description-${index}`}>
              Project Description
            </label>
            <textarea
              name="description"
              value={project.description}
              onChange={(event) => handleChange(index, event)}
              placeholder="Enter project description"
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor={`liveLink-${index}`}>
              Live Link
            </label>
            <input
              type="url"
              name="liveLink"
              value={project.liveLink}
              onChange={(event) => handleChange(index, event)}
              placeholder="Enter live link"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor={`githubLink-${index}`}>
              GitHub Link
            </label>
            <input
              type="url"
              name="githubLink"
              value={project.githubLink}
              onChange={(event) => handleChange(index, event)}
              placeholder="Enter GitHub link"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor={`technologies-${index}`}>
              Technologies Used
            </label>
            <input
              type="text"
              name="technologies"
              value={project.technologies}
              onChange={(event) => handleChange(index, event)}
              placeholder="Enter technologies used (e.g., React, Node.js)"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="button"
            onClick={() => handleDeleteProject(index)}
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Delete Project
          </button>
        </div>
      ))}
      <div className="flex justify-between">
        <button
          type="button"
          onClick={handleAddProject}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Project
        </button>
        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ProjectForm;
