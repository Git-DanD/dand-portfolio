import React, { useState } from "react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    category: "Web Development",
    description: "A fully responsive e-commerce platform with Stripe integration.",
    image: "https://source.unsplash.com/400x300/?technology",
    link: "https://yourwebsite.com",
  },
  {
    id: 2,
    title: "Portfolio Website",
    category: "Web Development",
    description: "A sleek personal portfolio showcasing my skills and projects.",
    image: "https://source.unsplash.com/400x300/?design",
    link: "https://yourportfolio.com",
  },
  {
    id: 3,
    title: "3D Game in Unreal Engine",
    category: "Game Development",
    description: "An immersive 3D adventure game developed in Unreal Engine.",
    image: "https://source.unsplash.com/400x300/?gaming",
    link: "https://yourgame.com",
  },
  {
    id: 4,
    title: "Logo Design",
    category: "Design",
    description: "A minimal and modern logo designed for a startup.",
    image: "https://source.unsplash.com/400x300/?art",
    link: "https://yourdesign.com",
  },
];

const categories = ["All", "Web Development", "Game Development", "Design"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="portfolio" className="p-8 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold dark:text-violet-600 mb-6">
          My Portfolio
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

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <p className="text-gray-600 dark:text-gray-400">{project.category}</p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all">
                <span className="text-white text-lg font-medium">View Details</span>
              </div>
            </div>
          ))}
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
