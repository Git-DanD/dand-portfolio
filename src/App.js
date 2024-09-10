// src/components/MyComponent.jsx
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello, World!</h1>
      
    </div>
  );
}

const MyComponent = () => {
  return (
    <div className="bg-blue-500 text-white p-4">
      This is a Tailwind CSS styled component.
    </div>
  );
};

export default App;
export {MyComponent};
