import React from "react";
import {
  faGithub,
  faLinkedin,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

interface Links {
  logo: IconDefinition;
  title: string;
  path: string;
  description: string;
}

const Contact = () => {
  const links: Links[] = [
    {
      logo: faLinkedin,
      title: "LinkedIn",
      path: "https://www.linkedin.com/in/asif-kassam-ali/",
      description: "Kassam Ali Asif",
    },
    {
      logo: faGithub,
      title: "GitHub",
      path: "https://github.com/Asif-Dev-Fr",
      description: "Asif-Dev-Fr",
    },
    {
      logo: faEnvelope,
      title: "Email",
      path: "mailto:asif.k.dev@gmail.com",
      description: "asif.k.dev@gmail.comf",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen w-full py-16 bg-slate-900 text-slate-200"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-400 mb-6 font-pixelated uppercase tracking-wider">
            Contact me
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto relative">
            <div className="absolute w-2 h-2 bg-green-500 -top-1 left-0"></div>
            <div className="absolute w-2 h-2 bg-green-500 -top-1 right-0"></div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            {links.map((item: Links, i: number) => (
              <div key={i}>
                <a href={item.path} target="_blank" rel="noopener noreferrer">
                  <div className="flex flex-col md:flex-row items-center bg-slate-800 p-6  border-2 border-green-500 shadow-retro transform transition duration-300 hover:-translate-y-1 hover:shadow-retro-hover">
                    <div className="text-4xl text-green-400 mb-4 md:mb-0 md:mr-6">
                      <FontAwesomeIcon icon={item.logo} className="mr-1" />
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="text-xl text-green-300 mb-2">
                        {item.title}
                      </h3>
                      <span className="text-slate-300 hover:text-green-400 hover:underline transition duration-300">
                        {item.description}
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
