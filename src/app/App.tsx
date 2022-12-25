import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import logo from './logo.svg';
import "./App.css";

import { AppFooter, AppHeader } from "./components";
import { About, HOME } from "./pages";
import { AppContent } from "./content/AppContent";

function App(props: any) {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppContent />}>
          <Route index element={<HOME />} />
          <Route path="about" element={<About />} />
          <Route
              path="*"
              element={<div><h1>Oops ! 404, Not Found.</h1></div>}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
