import React, { useState } from 'react';

const IntroductionForm = () => {
  const [introduction, setIntroduction] = useState('');

  const handleChange = (event) => {
    setIntroduction(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Introduction:', introduction);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto p-4">
      <div className="mb-6">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="introduction">
          Introduction
        </label>
        <textarea
          name="introduction"
          value={introduction}
          onChange={handleChange}
          placeholder="Write a brief introduction about yourself..."
          required
          className="w-full p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="5"
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Submit
        </button>
      </div>
    </form>
    // <h1 className='bg-red-700'>
    //   IntroductionForm
    // </h1>
  );
};

export default IntroductionForm;
