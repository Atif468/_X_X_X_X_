import { useRef } from "react";
import ReactToPrint from "react-to-print";

function Resume() {
  const componentref = useRef();
  return (
    <>
      <ReactToPrint
        trigger={() => {
          return (
            <button
              onClick={console.log("not work")}
              className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
            >
              Download
            </button>
          );
        }}
        content={() => componentref.current}
      />
      <div className="bg-gray-100 ">
        <div
          className="max-w-4xl mx-auto border border-red-600 bg-white rounded-lg shadow-lg p-8"
          ref={componentref}
        >
          <header className="flex justify-between items-center mb-8">
            <div className="flex items-center">
              {/* <img src="../.././public/OIP.jpeg" alt="Logo" className="h-10 w-10 mr-4" /> */}
              <div>
                <h1 className="text-xl font-bold">Mohd Atif Ansari</h1>
                <p className="text-sm text-gray-600">Web Developer</p>
              </div>
            </div>
            <div className="flex items-center">
              <a
                href="https://www.linkedin.com/Atif468"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                {/* <img src="linkedin_logo.png" alt="LinkedIn" className="h-6 w-6" /> */}
                linkedin
              </a>
              <a
                href="https://leetcode.com/u/Atif_2005"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                {/* <img src="leetcode_logo.png" alt="LeetCode" className="h-6 w-6" /> */}
                leetcode
              </a>
              <a
                href="https://www.geeksforgeeks.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                {/* <img src="geeksforgeeks_logo.png" alt="GeeksforGeeks" className="h-6 w-6" /> */}
                gfg
              </a>
              <a
                href="https://www.hackerrank.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <img src="hackerrank_logo.png" alt="HackerRank" className="h-6 w-6" /> */}
                hackerank
              </a>
            </div>
          </header>
          <section className="mb-6">
            <h2 className="text-xl font-bold mb-1">Summary</h2>
            <hr />
            <p className="text-gray-700">
              Experienced web developer with a strong background in React.js and
              Node.js. Skilled in front-end and back-end development, as well as
              version control and agile methodologies.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-xl font-bold mb-2">Education</h2>
            <hr />
            <p className="text-lg font-semibold mb-1">
              Bachelor of Science in Computer Science
            </p>
            <p className="text-gray-600">XYZ University | Graduated May 2019</p>
          </section>
          <section className="mb-6">
            <h2 className="text-xl font-bold mb-2">Projects</h2>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-1">E-commerce Website</h3>
              <p className="text-gray-600">
                Developed a fully functional e-commerce website using React.js
                and Node.js.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-1">Portfolio Website</h3>
              <hr />
              <p className="text-gray-600">
                Designed and developed a personal portfolio website showcasing
                skills and projects.
              </p>
            </div>
          </section>
          <section className="">
            <h2 className="text-xl font-bold mb-1">Honors & Awards</h2>
            <hr />
            <ul className="list-disc ml-6">
              <li>Award for Excellence in Web Development - XYZ University</li>
              <li>First Place in Hackathon Competition - ABC Tech Expo</li>
            </ul>
          </section>
          <section >
            <h2 className="text-xl font-bold mb-2">Certifications</h2>
            <hr />
            <ul className="list-disc ml-6">
              <li>Certified React Developer - Udemy</li>
              <li>
                Agile Certified Practitioner - Project Management Institute
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-2">Skills</h2>
            <hr />
            <ul className="list-disc ml-6">
              <li>JavaScript (React.js, Node.js)</li>
              <li>HTML/CSS (Tailwind CSS)</li>
              <li>Version Control (Git)</li>
              <li>Agile Development</li>
              <li>Responsive Design</li>
              <li>Database Management (MongoDB, SQL)</li>
              {/* Adding some extra skills */}
              <li>UI/UX Design</li>
              <li>API Integration</li>
              <li>Testing and Debugging</li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}

export default Resume;
