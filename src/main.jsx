import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

// Lazy load pages – they will be downloaded only when needed
const Homepage = lazy(() => import("./Pages/Homepage.jsx"));
const UAE = lazy(() => import("./Pages/UAE.jsx"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div className="page-loading">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/online-school-in-uae" element={<UAE />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);