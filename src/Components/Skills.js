import React from "react";

const Skills = () => {
  const skills = [
    "JavaScript",
    "React",
    "HTML & CSS",
    "Tailwind CSS",
    "Unreal Engine",
    "3D Modeling",
    "Game Development",
    "Problem-Solving",
  ];

  return (
    <section
      id="skills"
      className="p-8 dark:bg-gray-100 dark:text-gray-800 h-screen w-screen"
    >
      <div className="container mx-auto text-center h-full flex flex-col justify-center">
        <h2 className="text-3xl font-semibold dark:text-violet-600 mb-6">
          My Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-4 bg-white shadow-lg rounded-xl dark:bg-gray-200"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
