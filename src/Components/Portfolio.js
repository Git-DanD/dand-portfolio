import React, { useState, useEffect, useRef } from "react";

const projects = [
  {
    id: 1,
    title: "Mobile-Only Portfolio Website",
    category: "Web Development",
    description: "A fully responsive portfolio platform.",
    image: "https://source.unsplash.com/400x300/?technology",
    link: "#",
  },
  {
    id: 2,
    title: "Portfolio Website",
    category: "Web Development",
    description: "A sleek personal portfolio.",
    image: "https://source.unsplash.com/400x300/?design",
    link: "#",
  },
  {
    id: 3,
    title: "Dino Game",
    category: "Game Development",
    description: "A P5JS Game.",
    image: "https://source.unsplash.com/400x300/?gaming",
    link: "#",
  },
  {
    id: 4,
    title: "RESPAWN Graphics",
    category: "Design",
    description: "Graphics for the QUT Club RESPAWN.",
    image: "https://source.unsplash.com/400x300/?art",
    link: "#",
  },
  {
    id: 5,
    title: "Start/Stop Game",
    category: "Game Development",
    description: "A P5JS Game.",
    image: "https://source.unsplash.com/400x300/?weather",
    link: "#",
  },
  {
    id: 6,
    title: "JavaScript Calculator",
    category: "Web Development",
    description: "A JS Calculator.",
    image: "https://source.unsplash.com/400x300/?weather",
    link: "#",
  },
  {
    id: 7,
    title: "Generative Pattern Design",
    category: "Web Development",
    description: "A P5JS App.",
    image: "https://source.unsplash.com/400x300/?weather",
    link: "#",
  },
];

const categories = ["All", "Web Development", "Game Development", "Design"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [containerHeight, setContainerHeight] = useState("auto");
  const gridRef = useRef(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  useEffect(() => {
    if (gridRef.current) {
      const newHeight = gridRef.current.scrollHeight;
      setContainerHeight(`${newHeight}px`);
    }
  }, [filteredProjects]);

  return (
    <section
      id="portfolio"
      className="min-h-screen flex flex-col justify-center p-8 dark:bg-gray-900 dark:text-gray-800 scroll-mt-16"
    >
      <div className="container mx-auto m-16 text-center h-full flex flex-col justify-center">
        <h2 className="text-3xl font-semibold dark:text-violet-600 mb-6">
          Portfolio
        </h2>

        {/* Tabs */}
        <div className="flex justify-center space-x-4 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-lg rounded-lg transition-all ${
                activeCategory === category
                  ? "bg-violet-600 text-white"
                  : "bg-white text-gray-800 dark:bg-gray-800 dark:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards with Smooth Expand */}
        <div
          className="transition-all duration-500 ease-in-out overflow-hidden"
          style={{ height: containerHeight }}
        >
          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="relative group bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {project.category}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all">
                  <span className="text-white text-lg font-medium">
                    View Details
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Project Details */}
      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-700 dark:text-gray-300 text-xl"
              onClick={() => setSelectedProject(null)}
            >
              &times;
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-2xl font-semibold dark:text-white mt-4">
              {selectedProject.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              {selectedProject.description}
            </p>
            <a
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-all"
            >
              Visit Project
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
