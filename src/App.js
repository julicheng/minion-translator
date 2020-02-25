import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

const App = () => {
  return (
    <div className="container">
      <div className="card">
        <Header
          title="Minion Translator"
          subtitle="Learn to speak to minions!"
        />
        <Content />
      </div>
    </div>
  );
};

export default App;
