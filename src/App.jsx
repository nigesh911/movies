import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";  // Assuming you have a Navbar component
import MovieList from "./components/MovieList";  // Your newly created MovieList component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MovieList />} />
      </Routes>
    </Router>
  );
}

export default App;
