import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center text-center p-6 bg-gray-100 dark:bg-gray-900"
    >
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
        Hi, I'm <span className="text-violet-600">Dat (Brendan) Duong</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mt-4 max-w-2xl">
        I'm a passionate Web Designer who loves building amazing web
        experiences.
      </p>
      <div className="mt-6">
        <a
          href="#contact"
          className="px-6 py-3 text-lg font-medium text-white bg-violet-600 rounded-lg shadow-md hover:bg-violet-700 transition-all"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Home;
