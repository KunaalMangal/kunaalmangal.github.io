import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import logo from './logo.svg';
import "./App.css";

import { About, Blogs, Contact, Experience, HOME, Projects } from "./pages";
import { AppContent } from "./content/AppContent";

function App(props: any) {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppContent />}>
            <Route index element={<HOME />} />
            <Route path="about" element={<About />} />
            <Route path="experience" element={<Experience />} />
            <Route path="projects" element={<Projects />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route
              path="*"
              element={
                <div>
                  <h1>Oops ! 404, Not Found.</h1>
                </div>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
