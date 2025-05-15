import React from "react";

const Contact = () => {
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
            {/* LinkedIn */}
            <div className="flex flex-col md:flex-row items-center bg-slate-800 p-6  border-2 border-green-500 shadow-retro transform transition duration-300 hover:-translate-y-1 hover:shadow-retro-hover">
              <div className="text-4xl text-green-400 mb-4 md:mb-0 md:mr-6">
                <i className="fab fa-linkedin"></i>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl text-green-300 mb-2">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/asif-kassam-ali/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-green-400 hover:underline transition duration-300"
                >
                  Kassam Ali Asif
                </a>
              </div>
            </div>

            {/* GitHub */}
            <div className="flex flex-col md:flex-row items-center bg-slate-800 p-6  border-2 border-green-500 shadow-retro transform transition duration-300 hover:-translate-y-1 hover:shadow-retro-hover">
              <div className="text-4xl text-green-400 mb-4 md:mb-0 md:mr-6">
                <i className="fab fa-github-square"></i>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl text-green-300 mb-2">GitHub</h3>
                <a
                  href="https://github.com/Asif-Dev-Fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-green-400 hover:underline transition duration-300"
                >
                  Asif-Dev-Fr
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col md:flex-row items-center bg-slate-800 p-6  border-2 border-green-500 shadow-retro transform transition duration-300 hover:-translate-y-1 hover:shadow-retro-hover">
              <div className="text-4xl text-green-400 mb-4 md:mb-0 md:mr-6">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl text-green-300 mb-2">Email</h3>
                <a
                  href="mailto:asif.k.dev@gmail.com"
                  className="text-slate-300 hover:text-green-400 hover:underline transition duration-300"
                >
                  asif.k.dev@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
