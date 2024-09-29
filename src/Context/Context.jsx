// createContext.js
import { createContext, useState } from 'react';

const ResumeContext = createContext();

const ResumeProvider = ({ children }) => {
  const [achievements, setAchievements] = useState([]);
  const [educations, setEducations] = useState([]);
  const [introduction, setIntroduction] = useState('');
  const [links, setLinks] = useState([]);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);

  return (
    <ResumeContext.Provider
      value={{
        achievements,
        setAchievements,
        educations,
        setEducations,
        introduction,
        setIntroduction,
        links,
        setLinks,
        projects,
        setProjects,
        skills,
        setSkills,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};

export { ResumeProvider, ResumeContext };