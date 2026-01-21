import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/main";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Reviews from "./components/Reviews/Reviews";
import Contacts from "./components/Contacts/Contacs";

function App() {
  return (
    <>
      <Header />
      <Main />
      <About />
      <Services />
      <Portfolio />
      <Reviews />
      <Contacts />
    </>
  );
}

export default App;
