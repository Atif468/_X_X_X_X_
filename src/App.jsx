import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Resume from "./resume/resume";
import LabelBottomNavigation from "./resume/side";
import LinkForm from "./Forms/links";
import EducationForm from "./Forms/edu";
import IntroductionForm from "./Forms/intro";
import SkillsForm from "./Forms/skills";
import ProjectForm from "./Forms/projects";
import AchievementForm from "./Forms/achievement";

function App() {
  return (
    <>
      <nav className="h-10 relative text-black text-2xl text-center">
        Under marammat..
      </nav>
      <section className="w-[50%] h-[100%] fixed left-0 bg-black  overflow-auto touch-auto">
        <div className="h-[70%] w-[70%] bg-black m-auto text-white">
          <Routes>
            <Route path="/IntroductionForm" element={<IntroductionForm />} />
            <Route path="/LinkForm" element={<LinkForm />} />
            <Route path="/SkillsForm" element={<SkillsForm />} />
            <Route path="/ProjectForm" element={<ProjectForm />} />
            <Route path="/EducationForm" element={<EducationForm />} />
            <Route path="/AchievementForm" element={<AchievementForm />} />
          </Routes>
        </div>
        <LabelBottomNavigation />
      </section>
      <section className="w-[50%] h-[100%] p-10 fixed bg-black right-0 overflow-auto touch-auto">
        <Resume />
      </section>
    </>
  );
}

export default App;
