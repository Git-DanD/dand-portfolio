import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Skills from "./Components/Skills";

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
        <Skills />
      </main>
      <Footer />
    </div>
  );
};

export default App;
