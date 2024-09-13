import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

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
        <p>Your main content will appear here...</p>
      </main>
      <Footer />
    </div>
  );
};

export default App;
