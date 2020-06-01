import React from "react";
import "./style.css";

import Navbar from 'react-bootstrap/Navbar';
// This file exports both the List and ListItem components

export function Header() {
  return (
      <Navbar className="navbar-expand-lg navbar-light py-0">
    {/* <nav className="navbar navbar-expand-lg navbar-light py-0"> */}
        <div className="container p-0">
            <h1 className="navbar-brand bg-info text-white py-4 px-2 m-0 text-center">Jonathon Lee</h1>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="nav justify-content-end ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/portfolio">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>

    {/* </nav> */}
    </Navbar>
  );
}

export default Header;