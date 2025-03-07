import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Skills from "./Components/Skills";
import ExperienceEducation from "./Components/ExperienceEducation";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <main style={{ flex: "1" }}>
        <Home />
        <Skills />
        <ExperienceEducation />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
