import React from "react";
// import logo from './logo.svg';
import "./App.css";

import { Footer, Header } from "./components";

function App(props: any) {
  return (
    <div className="App">
      <Header className="App-header" />
      {props.children}
      <Footer />
    </div>
  );
}

export default App;
