import React, { useContext, useRef } from "react";
import ReactToPrint from "react-to-print";
import { ResumeContext } from '../Context/Context'; // Adjust the import path as necessary

const Resume = () => {
  const componentRef = useRef();
  const {
    introduction,
    educations,
    projects,
    skills,
    achievements,
    links,
  } = useContext(ResumeContext);

  return (
    <div className="bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <div>
              <h1 className="text-2xl font-bold">Mohd Atif Ansari</h1>
              <p className="text-sm text-gray-600">Web Developer</p>
            </div>
          </div>
          <div className="flex items-center">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4 text-blue-500 hover:underline"
              >
                {link.label}
              </a>
            ))}
          </div>
        </header>

        <section className="mb-6">
          <h2 className="text-xl font-bold mb-1">Introduction</h2>
          <hr />
          <p className="text-gray-700">{introduction}</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Education</h2>
          <hr />
          {educations.map((education, index) => (
            <div key={index} className="mb-4">
              <p className="text-lg font-semibold mb-1">{education.degree}</p>
              <p className="text-gray-600">{education.institution} | {education.year}</p>
            </div>
          ))}
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Projects</h2>
          {projects.map((project, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold mb-1">Honors & Awards</h2>
          <hr />
          <ul className="list-disc ml-6">
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Skills</h2>
          <hr />
          <ul className="list-disc ml-6">
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>

        <ReactToPrint
          trigger={() => (
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
            >
              Download
            </button>
          )}
          content={() => componentRef.current}
        />

        <div ref={componentRef} style={{ display: "none" }}>
          <div className="bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
              <header className="flex justify-between items-center mb-8">
                <div className="flex items-center">
                  <div>
                    <h1 className="text-2xl font-bold">Mohd Atif Ansari</h1>
                    <p className="text-sm text-gray-600">Web Developer</p>
                  </div>
                </div>
              </header>

              <section className="mb-6">
                <h2 className="text-xl font-bold mb-1">Introduction</h2>
                <hr />
                <p className="text-gray-700">{introduction}</p>
              </section>

              <section className="mb-6">
                <h2 className="text-xl font-bold mb-2">Education</h2>
                <hr />
                {educations.map((education, index) => (
                  <div key={index} className="mb-4">
                    <p className="text-lg font-semibold mb-1">{education.degree}</p>
                    <p className="text-gray-600">{education.institution} | {education.year}</p>
                  </div>
                ))}
              </section>

              <section className="mb-6">
                <h2 className="text-xl font-bold mb-2">Projects</h2>
                {projects.map((project, index) => (
                  <div key={index} className="mb-4">
                    <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                ))}
              </section>

              <section className="mb-6">
                <h2 className="text-xl font-bold mb-1">Honors & Awards</h2>
                <hr />
                <ul className="list-disc ml-6">
                  {achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </section>

              <section className="mb-6">
                <h2 className="text-xl font-bold mb-2">Skills</h2>
                <hr />
                <ul className="list-disc ml-6">
                  {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
