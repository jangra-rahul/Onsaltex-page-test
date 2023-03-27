import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Headermain from "./components/Header_main";
import Testimonialsfile from "./components/Testimonialsfile";
import Karriere from "./components/Karriere";
import Preloader from "./components/Preloader";

function App() {
  const [preload, setpreload] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setpreload(false);
      document.body.classList.remove("overflow-hidden");
    }, 2800);
  }, []);
  return (
    <>
      <div className="overflow-hidden">
        {preload && <Preloader />}
        <Routes>
          <Route path="/" element={<Headermain />} />
          <Route path="/about" element={<Testimonialsfile />} />
          <Route path="/Hiring" element={<Karriere />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
