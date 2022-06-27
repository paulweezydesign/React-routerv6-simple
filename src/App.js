import "./styles.css";

import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./component/home";
import About from "./component/about";
import Contact from "./component/contact";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav className="grid grid-cols-2 items-center px-[7%] py-4">
            <div className="">
              <Link to="/">
                <a href="/" className="">
                  <h1 className="uppercase text-xl font-black">
                    My Cute Kittens
                  </h1>
                </a>
              </Link>
            </div>
            <div>
              <ul className="flex justify-end uppercase font-bold">
                <li className="">
                  <Link to="/">Home</Link>
                </li>
                <li className="ml-7">
                  <Link to="/about">About Us</Link>
                </li>
                <li className="ml-7">
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
