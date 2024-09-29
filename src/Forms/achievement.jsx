import React, { useContext, useState } from 'react';
import { ResumeContext } from '../Context/Context'; // Adjust the path if necessary

const AchievementForm = () => {
  const { achievements, setAchievements } = useContext(ResumeContext); // Using context for achievements

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const newAchievements = [...achievements];
    newAchievements[index][name] = value;
    setAchievements(newAchievements); // Update context state
  };

  const handleAddAchievement = () => {
    setAchievements([...achievements, { title: '', description: '' }]);
  };

  const handleDeleteAchievement = (index) => {
    const newAchievements = achievements.filter((_, i) => i !== index);
    setAchievements(newAchievements);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted Achievements:', achievements);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto p-4">
      {achievements.map((achievement, index) => (
        <div key={index} className="mb-6 border-b pb-4">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor={`title-${index}`}>
              Achievement Title
            </label>
            <input
              type="text"
              name="title"
              value={achievement.title}
              onChange={(event) => handleChange(index, event)}
              placeholder="Enter achievement title"
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor={`description-${index}`}>
              Achievement Description
            </label>
            <textarea
              name="description"
              value={achievement.description}
              onChange={(event) => handleChange(index, event)}
              placeholder="Enter achievement description"
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="button"
            onClick={() => handleDeleteAchievement(index)}
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Delete Achievement
          </button>
        </div>
      ))}
      <div className="flex justify-between">
        <button
          type="button"
          onClick={handleAddAchievement}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Achievement
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

export default AchievementForm;
