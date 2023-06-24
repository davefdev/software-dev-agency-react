import React from "react";
import "./header.css";

const Header = () => {
  const navLinks = [
    { name: "Home", url: "/home" },
    { name: "About", url: "/about" },
    { name: "Service", url: "/service" },
    { name: "Projects", url: "/projects" },
    { name: "Blog", url: "/blog" },
  ];

  return (
    <header className="header">
      <div className="container">
        <div className="logo-container">
          logo
          {/* <img className="logo">logo></img> */}
        </div>

        <div className="navigation">
          <ul>
            {navLinks.map((link) => {
              <li key={link.url}>
                <a href={link.url}>{link.name}</a>
              </li>;
            })}
          </ul>
        </div>
        <div className="light__mode">
          <span>
            <i class="ri-sun-line"></i>Light mode
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
