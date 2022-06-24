import React from "react";
import Topbar from "./components/Topbar/Topbar";
import Home from "./pages/home/Home";
const App = () => {
  return (
    <div className="app">
      <Topbar isScrolled={true} />
      <Home />
    </div>
  );
};

export default App;
