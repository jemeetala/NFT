import React from "react";
import Saved from "pages/Saved";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/saved" element={<Saved />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
