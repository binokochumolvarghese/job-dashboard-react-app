import { useState } from "react";
import "./App.css";
import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import Home from "./components/dashboard/Home";

function App() {

  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
