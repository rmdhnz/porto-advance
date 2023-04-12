import React from "react";
import "./css/Sidebar.css";
import Timer from "../Timer";
import { clr, setClr } from "./MainContent";
export default function Sidebar() {
  return (
    <div className="text-white sidebar expand-sb">
      <p className="display-6 text-warning">FADHLY RAMADHAN</p>
      <ul className="text-center">
        <li className="mb-3">
          <a href="/">
            <i class="bi bi-house"></i> Dashboard
          </a>
        </li>
        <li className="mb-3">
          <a href="/projects">
            <i class="bi bi-laptop"></i> Project
          </a>
        </li>
        <li className="mb-3">
          <a href="/contact">
            <i class="bi bi-telephone"></i> Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
