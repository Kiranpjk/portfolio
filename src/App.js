import React from "react";
import Header from "../src/components/Header/Header.jsx";
import Home from "../src/components/Home/Home.jsx";
import About from "../src/components/About/About.jsx";
import Skills from "../src/components/Skills/Skills.jsx";
import Services from "../src/components/Services/Services.jsx";
import Qualification from "../src/components/Qualification/Qualification.jsx";
import Contact from "../src/components/Contacts/Contact.jsx";
import Footer from "../src/components/footer/Footer.jsx";
const App = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Contact />
        <Footer/>
      </main>
    </div>
  );
};

export default App;
