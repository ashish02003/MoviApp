import React, { useState } from "react";

import { Link } from "react-router-dom";
import profile from "../../images/profile.png";
import "./Header.css";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice";

const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if(term==="") return alert("Please Enter The Search Term!!😒");
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm("")
  
  };
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">My Movies</Link>
      </div>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={term}
            placeholder="Search Movies or Shows"
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div className="user-image">
        <img src={profile} alt="user" />
      </div>
    </div>
  );
};

export default Header;
