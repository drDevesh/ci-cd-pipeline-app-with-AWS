import React from 'react';
import './App.css'; // we'll edit this too

function App() {
  return (
    <div className="App">
      <header className="hero">
        <h1 className="title">Welcome to My React + AWS App 🚀</h1>
        <p className="subtitle">Deployed automatically with CodePipeline & S3</p>
        <button className="btn">Explore More</button>
      </header>
    </div>
  );
}

export default App;
