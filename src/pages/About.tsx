import React, { useState, useEffect } from "react";
import RetroPanel from "../components/RetroPanel";
import TypewriterText from "../components/TypewriterText";
import PixelatedImage from "../components/PixelatedImage";
import PROFILE from "../assets/images/profile.png";
import useViewport from "../hooks/useUserView";

interface Education {
  degree: string;
  school: string;
  period: string;
  description?: string;
}

interface Work {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  tags: string[];
}

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "profile" | "experience" | "education"
  >("profile");
  const [showContent, setShowContent] = useState<boolean>(false);
  const { isPcView } = useViewport();

  useEffect(() => {
    // Animation delay when entering page
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Work experience from LinkedIn
  const workExperience: Work[] = [
    {
      title: "Front-end Developer",
      company: "SUN株式会社",
      period: "Feb 2024 - Present",
      location: "Tokyo, Japan",
      description: [
        "Collaborate in a full Japanese-speaking environment, demonstrating strong communication and adaptability skills.",
        "Develop and implement new user interface components using Typescript, enhancing application functionality.",
        "Perform ongoing maintenance and debugging of existing code, ensuring application stability and optimal performance.",
        "Design and execute NoSQL queries in Node.js to retrieve and manage data from DynamoDB.",
        "Conduct thorough testing, including PT (Performance Testing) and IT (Integration Testing), to guarantee software quality.",
      ],
      tags: ["React", "Typescript", "DynamoDB", "Node.js"],
    },
    {
      title: "Front-end Developer",
      company: "PRIORITIS, an IQVIA business",
      period: "Apr 2022 - October 2023",
      location: "Paris, France",
      description: [
        "Led the migration of code from Angular to React.js, resulting in improved application performance and maintainability.",
        "Integrated Redux Toolkit for efficient state management, streamlining data flow and enhancing application responsiveness.",
        "Developed a comprehensive global search functionality, enabling users to quickly find information by drug, therapeutic area, regulator, country, and clinical trials.",
        "Implemented internationalization (i18n) to support multi-language functionality.",
      ],
      tags: ["React", "Typescript", "Nest", "Postgre SQL"],
    },
    {
      title: "Fullstack Developer",
      company: "Fiters",
      period: "Jan 2021 - Mar 2022",
      location: "Paris, France",
      description: [
        "Participate at the development and enhancement of three Fiters applications (two mobile, one web), resulting in increased user engagement.",
        "Performed end-to-end (E2E) testing using Cypress, ensuring high-quality software releases, and redesigned coach and user applications with a focus on improved user experience.",
        "Implemented Slack Webhooks to monitor support channel posts and automate issue creation in GitLab via the GitLab API, streamlining support workflows.",
        "Utilized GitLab Webhooks to track issue modifications and leveraged the Slack API to provide real-time updatesto users in the support channel, improving communication.",
        "Optimized image processing by resizing images using the Jimp package before uploading them to Firebase Storage, reducing storage consumption and improving application performance.",
      ],
      tags: ["Vue.js", "Quasar", "Node.js", "Express", "Cypress", "Firebase"],
    },
    {
      title: "Web Developer",
      company: "Sismeo - Web agency",
      period: "Aug 2019 - Dec 2019",
      location: "Paris, France",
      description: [
        "Contributed to the development of websites using WordPress and PHP, gaining experience in front-end and back-end web development.",
        "Developed custom WordPress plugins to extend website functionality and meet specific client requirements.",
      ],
      tags: ["PHP", "Wordpress"],
    },
  ];

  // Education from LinkedIn
  const education: Education[] = [
    {
      degree: "Web Development Bootcamp",
      school: "Doranco (France)",
      period: "2019",
      description:
        "Intensive coding bootcamp focusing on modern web development",
    },
    {
      degree:
        "Master 1 Degree in International Trade and Foreign languages (ENG-JP)",
      school: "University of Cergy-Pontoise",
      period: "2013 - 2015",
      description: "Study of economics and languages",
    },
  ];

  return (
    <div className="min-h-full">
      <div
        className={`transition-opacity duration-1000 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-4xl font-bold mb-8 dark:text-green-400 pixel-shadow">
          ABOUT ME
        </h1>

        {/* Tab Navigation */}
        <div className="flex border-b-2 border-green-400 mb-6">
          <button
            onClick={() => setActiveTab("profile")}
            className={`px-4 py-2 font-bold ${
              activeTab === "profile"
                ? "bg-green-400 text-gray-900"
                : "text-green-400"
            }`}
            style={{ cursor: activeTab === "profile" ? "auto" : "pointer" }}
          >
            PROFILE
          </button>
          <button
            onClick={() => setActiveTab("experience")}
            className={`px-4 py-2 font-bold ${
              activeTab === "experience"
                ? "bg-green-400 text-gray-900"
                : "text-green-400"
            }`}
            style={{ cursor: activeTab === "experience" ? "auto" : "pointer" }}
          >
            WORK EXP.
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`px-4 py-2 font-bold ${
              activeTab === "education"
                ? "bg-green-400 text-gray-900"
                : "text-green-400"
            }`}
            style={{ cursor: activeTab === "education" ? "auto" : "pointer" }}
          >
            EDUCATION
          </button>
        </div>

        {/* Profile Tab */}
        {activeTab === "profile" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <PixelatedImage
                src={PROFILE}
                alt="Asif Kassam"
                className="border-4 border-green-400 mb-4"
                height={320}
                ObjectFit={isPcView ? "cover" : "contain"}
              />

              <RetroPanel title="STATS">
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between">
                      <span>Coding</span>
                      <span>95/100</span>
                    </div>
                    <div className="w-full bg-gray-700">
                      <div
                        className="bg-green-400 h-2"
                        style={{ width: "95%" }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between">
                      <span>Problem Solving</span>
                      <span>90/100</span>
                    </div>
                    <div className="w-full bg-gray-700">
                      <div
                        className="bg-green-400 h-2"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between">
                      <span>Teamwork</span>
                      <span>85/100</span>
                    </div>
                    <div className="w-full bg-gray-700">
                      <div
                        className="bg-green-400 h-2"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between">
                      <span>Communication</span>
                      <span>90/100</span>
                    </div>
                    <div className="w-full bg-gray-700">
                      <div
                        className="bg-green-400 h-2"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </RetroPanel>
            </div>

            <div className="md:col-span-2 space-y-6">
              <RetroPanel title="CHARACTER INFO">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-green-400">
                    ASIF KASSAM ALI
                  </h2>
                  <p>LVL 63 FULL STACK DEVELOPER</p>
                  <p className="leading-relaxed">
                    <TypewriterText
                      text="A passionate developer with expertise in JavaScript, React, TypeScript, and Node.js. Dedicated to creating clean, efficient, and user-friendly web applications with a focus on modern development practices and performance optimization."
                      delay={20}
                    />
                  </p>
                </div>
              </RetroPanel>

              <RetroPanel title="SPECIALIZATIONS">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="border-2 border-green-400 p-3">
                    <h3 className="font-bold mb-2">FRONTEND MASTERY</h3>
                    <p className="text-sm">
                      Expert in React, TypeScript, and modern CSS frameworks
                      like Tailwind
                    </p>
                  </div>
                  <div className="border-2 border-green-400 p-3">
                    <h3 className="font-bold mb-2">BACKEND DEVELOPMENT</h3>
                    <p className="text-sm">
                      Proficient with Node.js, Express, and database
                      technologies
                    </p>
                  </div>
                  <div className="border-2 border-green-400 p-3">
                    <h3 className="font-bold mb-2">UI/UX DESIGN</h3>
                    <p className="text-sm">
                      Creating intuitive and responsive user interfaces
                    </p>
                  </div>
                  <div className="border-2 border-green-400 p-3">
                    <h3 className="font-bold mb-2">PROBLEM SOLVING</h3>
                    <p className="text-sm">
                      Analytical approach to debugging and optimization
                    </p>
                  </div>
                </div>
              </RetroPanel>

              <RetroPanel title="EQUIPMENT">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-bold mb-2">WEAPONS</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• VS Code (Legendary)</li>
                      <li>• Git (Mastercraft)</li>
                      <li>• Stack Overflow (Rare)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">ARMOR</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Coffee (+10 Energy)</li>
                      <li>• Headphones (+5 Focus)</li>
                      <li>• Comfortable Chair (+8 Endurance)</li>
                    </ul>
                  </div>
                </div>
              </RetroPanel>
            </div>
          </div>
        )}

        {/* Experience Tab */}
        {activeTab === "experience" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-green-400 mb-6">
              WORK EXPERIENCE
            </h2>

            {workExperience.map((job, index) => (
              <RetroPanel key={index} className="border-l-4 border-l-green-500">
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <h3 className="text-xl font-bold text-green-400">
                      {job.title}
                    </h3>
                    <span className="text-green-500">{job.period}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between mb-4">
                    <h4 className="font-bold">{job.company}</h4>
                    <span className="text-sm">{job.location}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 bg-gray-700 text-green-400 border border-green-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ul className="list-disc pl-5 space-y-1">
                    {job.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </RetroPanel>
            ))}

            <div className="text-center mt-8">
              <p className="text-sm text-green-500">
                * EXPERIENCE POINTS ACCUMULATED: 9999 *
              </p>
            </div>
          </div>
        )}

        {/* Education Tab */}
        {activeTab === "education" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-green-400 mb-6">
              EDUCATION & TRAINING
            </h2>

            {education.map((edu, index) => (
              <RetroPanel key={index} className="border-l-4 border-l-green-500">
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <h3 className="text-xl font-bold text-green-400">
                      {edu.degree}
                    </h3>
                    <span className="text-green-500">{edu.period}</span>
                  </div>
                  <h4 className="font-bold mb-4">{edu.school}</h4>
                  <p>{edu.description}</p>
                </div>
              </RetroPanel>
            ))}

            <RetroPanel title="SKILLS ACQUIRED">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="border-2 border-green-400 p-3 text-center">
                  <p className="font-bold">JavaScript</p>
                </div>
                <div className="border-2 border-green-400 p-3 text-center">
                  <p className="font-bold">React</p>
                </div>
                <div className="border-2 border-green-400 p-3 text-center">
                  <p className="font-bold">TypeScript</p>
                </div>
                <div className="border-2 border-green-400 p-3 text-center">
                  <p className="font-bold">Node.js</p>
                </div>
                <div className="border-2 border-green-400 p-3 text-center">
                  <p className="font-bold">DynamoDB</p>
                </div>
                <div className="border-2 border-green-400 p-3 text-center">
                  <p className="font-bold">Tailwind CSS</p>
                </div>
              </div>
            </RetroPanel>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
