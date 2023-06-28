"use client"; // this is a client component
import React from "react";

export default function Navbar() {
  return (
    <div className="navigation">
      <div className="content">
        <a href="#" className="u-pull-left">
          <img
            src="/imgs/logo-small.png"
            className="logo"
            alt="PoofyLand Logo"
          />
        </a>
        <nav className="menu u-pull-right">
          <span className="menu-links">
            <a className="menu active" href="#home">
              Home
            </a>
            <a className="menu" href="#about">
              About
            </a>
            <a className="menu" href="#nft">
              NFT
            </a>
            <a className="menu" href="#modes">
              Modes
            </a>
            <a className="menu" href="#events">
              Events
            </a>
            <a className="menu" href="#roadmap">
              Roadmap
            </a>
            <a className="menu" href="#faqs">
              FAQs
            </a>
            <a className="menu" href="#updates">
              Updates
            </a>
            <a className="menu" href="#community">
              Community
            </a>
            <a href="https://poofyland.shop/" target="_blank">
              Shop
            </a>
          </span>
        </nav>
      </div>
    </div>
  );
}
