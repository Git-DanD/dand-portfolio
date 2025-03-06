import React from "react";

const ExperienceEducation = () => {
  const experience = [
    {
      role: "Fulfillment Worker",
      company: "Current Employer",
      year: "Present",
    },
    { role: "Baker’s Assistant", company: "Bakery", year: "Previous" },
    { role: "Surf Club Waiter", company: "Surf Club", year: "Previous" },
  ];

  const education = [
    {
      degree: "Bachelor's in IT (with distinction)",
      institution: "Your University",
      year: "Graduated",
    },
  ];

  return (
    <section
      id="experience-education"
      className="p-8 dark:bg-gray-100 dark:text-gray-800"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold dark:text-violet-600 mb-6">
          Experience & Education
        </h2>

        {/* Experience Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-medium mb-4">Experience</h3>
          <div className="space-y-4">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="p-4 bg-white shadow-lg rounded-xl dark:bg-gray-200"
              >
                <p className="text-lg font-semibold">{exp.role}</p>
                <p className="text-sm">
                  {exp.company} | {exp.year}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-2xl font-medium mb-4">Education</h3>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div
                key={index}
                className="p-4 bg-white shadow-lg rounded-xl dark:bg-gray-200"
              >
                <p className="text-lg font-semibold">{edu.degree}</p>
                <p className="text-sm">
                  {edu.institution} | {edu.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;
