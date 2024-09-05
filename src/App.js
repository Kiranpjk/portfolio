import React from "react";
import Header from "../src/components/Header/Header.jsx";
import Home from "../src/components/Home/Home.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <Home />
      </main>
    </div>
  );
};

export default App;
