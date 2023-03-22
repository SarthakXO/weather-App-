import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface Props {
  location: string;
  setLocation: Function;
}

const Navbar = (props: Props) => {
  const [city, setCity] = useState<string>("Delhi");
  const navigate = useNavigate();

  const updateWeather = async () => {
    props.setLocation(city);

    navigate("/weather");
  };

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-primary">
        <Link className="navbar-brand" to="/">
          SarthakXO-Weather
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
          <div className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Enter the City"
              aria-label="Search"
              onChange={(e) => setCity(e.target.value)}
            />
            <button
              className="btn btn-success my-2 my-sm-0"
              onClick={updateWeather}
            >
              Search
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
