import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrent } from "../actions/current.weather";
import { useEffect } from "react";

function Header() {

  return (
    <nav class="navbar navbar-light bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand">React Weather</a>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search city..."
            aria-label="Search"
          ></input>
          <button class="btn btn-light" type="submit">
            <i class="bi bi-search"></i>
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Header;
