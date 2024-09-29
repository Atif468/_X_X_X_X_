import React, { useContext } from 'react';
import { ResumeContext } from '../Context/Context'; // Adjust the path if necessary

const EducationForm = () => {
  const { educations, setEducations } = useContext(ResumeContext); // Using context for educations

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const newEducations = [...educations];
    newEducations[index][name] = value;
    setEducations(newEducations); // Update context state
  };

  const handleAddEducation = () => {
    setEducations([
      ...educations,
      { institution: '', degree: '', fieldOfStudy: '', startDate: '', endDate: '', notes: '' },
    ]);
  };

  const handleDeleteEducation = (index) => {
    const newEducations = educations.filter((_, i) => i !== index);
    setEducations(newEducations);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted Education:', educations);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Education</h2>
      {educations.map((education, index) => (
        <div key={index} className="mb-6 border-b pb-4">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor={`institution-${index}`}>
              Institution
            </label>
            <input
              type="text"
              name="institution"
              value={education.institution}
              onChange={(event) => handleChange(index, event)}
              placeholder="Enter institution name"
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor={`degree-${index}`}>
              Degree
            </label>
            <input
              type="text"
              name="degree"
              value={education.degree}
              onChange={(event) => handleChange(index, event)}
              placeholder="Enter degree"
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor={`fieldOfStudy-${index}`}>
              Field of Study
            </label>
            <input
              type="text"
              name="fieldOfStudy"
              value={education.fieldOfStudy}
              onChange={(event) => handleChange(index, event)}
              placeholder="Enter field of study"
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor={`startDate-${index}`}>
              Start Date
            </label>
            <input
              type="date"
              name="startDate"
              value={education.startDate}
              onChange={(event) => handleChange(index, event)}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor={`endDate-${index}`}>
              End Date
            </label>
            <input
              type="date"
              name="endDate"
              value={education.endDate}
              onChange={(event) => handleChange(index, event)}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor={`notes-${index}`}>
              Notes (Optional)
            </label>
            <textarea
              name="notes"
              value={education.notes}
              onChange={(event) => handleChange(index, event)}
              placeholder="Any additional notes or achievements"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="3"
            />
          </div>
          <button
            type="button"
            onClick={() => handleDeleteEducation(index)}
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Delete Education
          </button>
        </div>
      ))}
      <div className="flex justify-between">
        <button
          type="button"
          onClick={handleAddEducation}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Education
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

export default EducationForm;
