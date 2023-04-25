import React from "react";
import "./css/Sidebar.css";
import Timer from "../Timer";
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
      </ul>
      <Timer />
    </div>
  );
}
