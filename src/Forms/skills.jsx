import React, { useState } from 'react';

const SkillsForm = () => {
  const [skills, setSkills] = useState(['']);

  const handleChange = (index, event) => {
    const newSkills = [...skills];
    newSkills[index] = event.target.value;
    setSkills(newSkills);
  };

  const handleAddSkill = () => {
    setSkills([...skills, '']);
  };

  const handleDeleteSkill = (index) => {
    const newSkills = skills.filter((_, i) => i !== index);
    setSkills(newSkills);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted Skills:', skills);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Skills</h2>
      {skills.map((skill, index) => (
        <div key={index} className="mb-4 flex items-center">
          <input
            type="text"
            value={skill}
            onChange={(event) => handleChange(index, event)}
            placeholder="Enter a skill"
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            onClick={() => handleDeleteSkill(index)}
            className="ml-4 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Delete
          </button>
        </div>
      ))}
      <div className="flex justify-between">
        <button
          type="button"
          onClick={handleAddSkill}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Skill
        </button>
        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Submit
        </button>
      </div>
    </form>
    // <h1 className='bg-red-700'>
    //   SkillsForm
    // </h1>
  );
};

export default SkillsForm;
