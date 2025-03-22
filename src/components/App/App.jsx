import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import News from "../News/News";
import Main from "../Main/Main";
import "./app.css";

const App = ({}) => {
  return (
    <div className="app">
      <div className="app__container">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/News" element={<News />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
