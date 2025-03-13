import React, { useState, useContext } from "react";
import { CartContext } from "./CartContext";
import '../styles/HeaderFooter.css'

export default function Header({ toggleCart }) {
  const [isOpen, setIsOpen] = useState(false);
  const { totalItems } = useContext(CartContext);

  return (
    <nav
      className="navbar navbar-expand-md p-3 px-md-3 px-2 sticky-top"
      style={{
        position: "fixed",
        width: "100%",
        top: 0,
        zIndex: 1000,
        backgroundColor: "white",
      }}
    >
      <div className="container-fluid d-flex align-items-center">
        <a className="navbar-brand fw-bold d-none d-md-block" href="/">
          <h4 className="logo-header mb-0">The Golden Mithai Bites</h4>
        </a>
        <div className="collapse navbar-collapse justify-content-end d-none d-md-flex align-items-center">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <a className="nav-link" href="/items">
                Shop All
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/profile">
                <i className="bi bi-person user-icon"></i>
              </a>
            </li>
          </ul>
          <button className="cart-btn desktop" onClick={toggleCart}>
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}

            <i className="bi bi-cart"></i>
          </button>
        </div>
        <div className="d-md-none w-100 d-flex justify-content-between align-items-center">
          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className="navbar-toggler-icon"
              style={{
                filter:
                  "invert(39%) sepia(64%) saturate(322%) hue-rotate(357deg) brightness(90%) contrast(88%)",
              }} // Brown color
            ></span>
          </button>

          <a className="navbar-brand fw-bold text-center logo-mobile mb-0" href="/">
            The Golden Mithai Bites
          </a>

          <button className="cart-btn mobile" onClick={toggleCart}>
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}

            <i className="bi bi-cart"></i>
          </button>
        </div>
        {isOpen && (
          <div
            className="p-3 position-absolute w-100 shadow mobile-links"
            style={{ top: "100%", left: 0, backgroundColor: "white"}}
          >
            <a className="d-block py-2 text-decoration-none" href="/items">
              Shop All
            </a>
            <a className="d-block py-2 text-decoration-none" href="/about">
              About
            </a>
            <a className="d-block py-2 text-decoration-none" href="/profile">
              Profile
            </a>
            <a className="d-block py-2 text-decoration-none" href="/contact">
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
