import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Navbar/Intro/intro";
import Skills from "./components/Navbar/Skills/skills";
import Works from "./components/Works/works";
import Resume from "./components/Resume/resume";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import { FaArrowUp } from "react-icons/fa";

const App = () => {
  const [showBtn, setShowBtn] = useState("myBtn none");
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setShowBtn("myBtn");
    } else {
      setShowBtn("none");
    }
  }

  function topFunction() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div>
      <Navbar></Navbar>
      <Intro></Intro>
      <Skills></Skills>
      <Works></Works>
      <Resume></Resume>
      <Contact></Contact>
      <Footer></Footer>
      <button
        onClick={topFunction}
        id="myBtn"
        className={showBtn}
        title="Go to Top"
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default App;
