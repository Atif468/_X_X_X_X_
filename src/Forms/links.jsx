import React, { useContext } from 'react';
import { ResumeContext } from '../Context/Context'; // Adjust the path if necessary

const LinkForm = () => {
  const { links, setLinks } = useContext(ResumeContext); // Use context for links

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const newLinks = [...links];
    newLinks[index][name] = value;
    setLinks(newLinks); // Update context state
  };

  const handleAddLink = () => {
    setLinks([...links, { name: '', url: '' }]); // Add new link entry to context
  };

  const handleDeleteLink = (index) => {
    const newLinks = links.filter((_, i) => i !== index);
    setLinks(newLinks); // Update context state
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted Links:', links); // You may want to use context here as well
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto p-4">
      {links.map((link, index) => (
        <div key={index} className="mb-4 flex flex-col md:flex-row md:items-center">
          <input
            type="text"
            name="name"
            value={link.name}
            onChange={(event) => handleChange(index, event)}
            placeholder="Link Name"
            required
            className="mb-2 md:mb-0 md:mr-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="url"
            name="url"
            value={link.url}
            onChange={(event) => handleChange(index, event)}
            placeholder="Link URL"
            required
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            onClick={() => handleDeleteLink(index)}
            className="ml-2 mt-2 md:mt-0 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Delete
          </button>
        </div>
      ))}
      <div className="flex justify-between">
        <button
          type="button"
          onClick={handleAddLink}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Link
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

export default LinkForm;
