import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
      <Routes>
        <Route exact path="/" element ={<Home/>} />
        <Route path="/movie/:imdbID" element ={<MovieDetail/>} />
        <Route path="*" element ={<PageNotFound/>} />
      </Routes>

      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
