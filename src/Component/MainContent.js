import React from "react";
import "./css/MainContent.css";
import Footer from "./Footer";
import Jumbotron from "./Jumbotron";
import Project from "./Project";
export default function MainContent() {
  return (
    <div className="main-content text-light pt-5">
      <Jumbotron />
      <Project />
      <Footer />
    </div>
  );
}
