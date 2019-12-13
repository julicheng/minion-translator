import React from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

const App = () => {
  const title = "Header";
  return (
    <>
      <Header title={title} />
      <Content />
      <Footer />
    </>
  );
};

export default App;
