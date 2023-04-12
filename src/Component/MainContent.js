import React, { useState } from "react";
import "./css/MainContent.css";
import Footer from "./Footer";
import Jumbotron from "./Jumbotron";
import Project from "./Project";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../index.css";
import ContactForm from "./Contact";
import NavbarComp from "./NavbarComp";
export default function MainContent() {
  const [clr, setClr] = useState(false);
  return (
    <div className="main-content text-light">
      <NavbarComp />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Jumbotron />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
