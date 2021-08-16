import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setCity } from "../actions/city";

function Header() {
  const dispatch = useDispatch();
  const [city, setCityName] = useState("");

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    setCityName(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await dispatch(setCity(city));
    setCityName("");
  };

  return (
    <nav className="navbar navbar-light bg-primary">
      <div className="container-fluid">
        <div style={{ width: "250px" }}>
          <a href="/">
            <img
              className="float-start"
              src="https://image.flaticon.com/icons/png/512/648/648198.png"
              style={{ width: "50px", height: "50px" }}
              alt="weather-icon"
            ></img>
          </a>
          <h3 className="text-center mt-2" style={{ color: "white" }}>
            React Weather
          </h3>
        </div>
        <form className="d-flex" onSubmit={handleSubmit}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search city..."
            aria-label="Search"
            value={city}
            onChange={handleChange}
          ></input>
          <button className="btn btn-light" type="submit">
            <i className="bi bi-search"></i>
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Header;
