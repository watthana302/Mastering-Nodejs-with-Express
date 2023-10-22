import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


function Navbar({ className }) {
  return (
    <header className={className}>
      <nav className="mainnav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/AddWeatherdata">Add WeatherData</Link>
          </li>
          
        </ul>
      </nav>
    </header>
  );
}

Navbar.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(Navbar)`
.mainnav ul {
  width: 215vh;
  height: vh;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.mainnav li {
  float: left;
}

.mainnav li a {
  display: block;
  color: white;
  text-align: center;
 
  text-decoration: none;
}

.mainnav li a:hover {
  background-color: #111;
}
`;