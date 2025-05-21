import React, { useState, useEffect } from "react";
import RetroPanel from "../components/RetroPanel";
import PixelatedImage from "../components/PixelatedImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faChrome } from "@fortawesome/free-brands-svg-icons";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

// Project interface
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [selectedTag, setSelectedTag] = useState<string>("all");
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showContent, setShowContent] = useState<boolean>(false);

  // This would typically come from an API, but we're hardcoding for this example
  const projectData: Project[] = [
    {
      id: 1,
      title: "ANIME FINDER",
      description:
        "An application to search for anime information and rankings using an external API, built with React and styled with Tailwind CSS.",
      image: "/images/projects/anime-finder.jpg",
      tags: ["React", "API", "CSS"],
      githubUrl: "https://github.com/Asif-Dev-Fr/Anime-Finder",
      liveUrl: "https://anime-finder-website.netlify.app/",
      featured: true,
    },
    {
      id: 2,
      title: "RESTAURANT APP",
      description:
        "A restaurant management system built with React, Express, and MongoDB. Features include menu management, order tracking, and user authentication.",
      image: "/images/projects/restaurant-app.jpg",
      tags: ["React", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/Asif-Dev-Fr/Restaurant-management-app",
      featured: false,
    },
    {
      id: 3,
      title: "CURRENCY CONVERTER",
      description:
        "A simple and elegant currency converter application that leverages external APIs to provide real-time exchange rates.",
      image: "/images/projects/currency-converter.jpg",
      tags: ["Javascript", "API", "CSS"],
      githubUrl: "https://github.com/Asif-Dev-Fr/Javascript-Currency-Converter",
      liveUrl: "https://asif-dev-fr.github.io/Javascript-Currency-Converter/",
      featured: true,
    },
    {
      id: 4,
      title: "WEATHER APP",
      description:
        "A weather application providing current conditions and forecasts for locations worldwide using OpenWeather API.",
      image: "/images/projects/weather-app.jpg",
      tags: ["React", "API", "Node.js"],
      githubUrl: "https://github.com/Asif-Dev-Fr/WeatherApp",
      liveUrl: "https://asif-weather-app.herokuapp.com/",
      featured: false,
    },
    {
      id: 5,
      title: "PORTFOLIO WEBSITE",
      description:
        "A personal portfolio website showcasing skills and projects, built with React and TypeScript.",
      image: "/images/projects/portfolio.jpg",
      tags: ["React", "TypeScript", "Tailwind"],
      githubUrl: "https://github.com/Asif-Dev-Fr/React-Portfolio",
      featured: true,
    },
    {
      id: 6,
      title: "E-COMMERCE PLATFORM",
      description:
        "A full-stack e-commerce platform with product listings, shopping cart, and payment integration.",
      image: "/images/projects/ecommerce.jpg",
      tags: ["React", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/Asif-Dev-Fr/E-commerce",
      featured: false,
    },
  ];

  // All unique tags from projects
  const tags = Array.from(
    new Set(projectData.flatMap((project) => project.tags))
  );

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setProjects(projectData);
      setFilteredProjects(projectData);
      setIsLoading(false);
    }, 1000);

    // Animation delay
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 300);

    return () => {
      clearTimeout(timer);
      clearTimeout(contentTimer);
    };
  }, []);

  // Filter projects by tag
  const filterProjects = (tag: string) => {
    setSelectedTag(tag);
    if (tag === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.tags.includes(tag))
      );
    }
  };

  return (
    <div className="min-h-full">
      <div
        className={`transition-opacity duration-1000 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-green-400 pixel-shadow">
            PROJECTS
          </h1>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center border-2 border-green-400 text-green-400 p-2 hover:bg-green-400 hover:text-gray-900 transition-all duration-300"
          >
            <FontAwesomeIcon icon={faFilter} className="mr-2" />
            FILTER
          </button>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="mb-8 animate-slideDown">
            <RetroPanel className="border-green-400">
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => filterProjects("all")}
                  className={`px-3 py-1 border-2 ${
                    selectedTag === "all"
                      ? "bg-green-400 text-gray-900 border-green-500"
                      : "border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900"
                  }`}
                >
                  ALL
                </button>

                {tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => filterProjects(tag)}
                    className={`px-3 py-1 border-2 ${
                      selectedTag === tag
                        ? "bg-green-400 text-gray-900 border-green-500"
                        : "border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </RetroPanel>
          </div>
        )}

        {/* Loading State */}
        {isLoading ? (
          <div className="flex flex-col items-center justify-center h-64">
            <div className="text-green-400 text-xl mb-4">
              LOADING PROJECTS...
            </div>
            <div className="w-16 h-4 bg-gray-700">
              <div className="h-full bg-green-400 animate-loadingBar"></div>
            </div>
          </div>
        ) : (
          <>
            {/* Featured Projects */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-green-400 border-b-2 border-green-400 pb-2 mb-6">
                FEATURED QUESTS
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredProjects
                  .filter((p) => p.featured)
                  .map((project) => (
                    <RetroPanel
                      key={project.id}
                      className="h-full border-green-500 hover:border-green-300 transition-colors duration-300"
                    >
                      <div className="h-full flex flex-col">
                        <div className="mb-4 aspect-video overflow-hidden border-2 border-green-400">
                          <PixelatedImage
                            src={
                              project.image ||
                              "/images/projects/placeholder.jpg"
                            }
                            alt={project.title}
                            className="w-full h-full"
                            height={320}
                          />
                        </div>

                        <h3 className="text-xl font-bold text-green-400 mb-2">
                          {project.title}
                        </h3>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-2 py-1 bg-gray-700 text-green-400 border border-green-400"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <p className="flex-grow mb-4 text-sm">
                          {project.description}
                        </p>

                        <div className="flex gap-4 mt-auto">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center border-2 border-green-400 text-green-400 px-3 py-1 hover:bg-green-400 hover:text-gray-900 transition-colors"
                          >
                            <FontAwesomeIcon icon={faGithub} className="mr-2" />
                            CODE
                          </a>

                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center border-2 border-green-400 text-green-400 px-3 py-1 hover:bg-green-400 hover:text-gray-900 transition-colors"
                            >
                              <FontAwesomeIcon
                                icon={faChrome}
                                className="mr-2"
                              />
                              DEMO
                            </a>
                          )}
                        </div>
                      </div>
                    </RetroPanel>
                  ))}
              </div>
            </div>

            {/* All Projects */}
            <div>
              <h2 className="text-2xl font-bold text-green-400 border-b-2 border-green-400 pb-2 mb-6">
                ALL PROJECTS
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <RetroPanel
                    key={project.id}
                    className="h-full hover:border-green-300 transition-colors duration-300"
                  >
                    <div className="h-full flex flex-col">
                      <div className="mb-3 aspect-video overflow-hidden border-2 border-green-400">
                        <PixelatedImage
                          src={
                            project.image || "/images/projects/placeholder.jpg"
                          }
                          alt={project.title}
                          className="w-full h-full"
                          height={320}
                        />
                      </div>

                      <h3 className="text-lg font-bold text-green-400 mb-2">
                        {project.title}
                      </h3>

                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-0.5 bg-gray-700 text-green-400 border border-green-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <p className="flex-grow mb-3 text-xs">
                        {project.description}
                      </p>

                      <div className="flex gap-3 mt-auto">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-sm border-2 border-green-400 text-green-400 px-2 py-1 hover:bg-green-400 hover:text-gray-900 transition-colors"
                        >
                          <FontAwesomeIcon icon={faGithub} className="mr-1" />
                          CODE
                        </a>

                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-sm border-2 border-green-400 text-green-400 px-2 py-1 hover:bg-green-400 hover:text-gray-900 transition-colors"
                          >
                            <FontAwesomeIcon icon={faChrome} className="mr-1" />
                            DEMO
                          </a>
                        )}
                      </div>
                    </div>
                  </RetroPanel>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Projects;
