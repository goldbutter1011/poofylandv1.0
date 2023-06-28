"use client"; // this is a client component
import React from "react";

export default function Header() {
  return (
    <header id="home" className="section viewport-header centered content">
    <div className="main-event event" data-sr-id="79">
      <img src="/imgs/logo.png" className="event-logo" alt="" /><br></br>
      <a href="https://poofyland.shop/register" target="_blank">
        <img src="/imgs/join-beta.png" className="event-img" alt="" />
      </a>

      {/* <div id="eventStart" className="flipdown flipdown__theme-dark">
     
      </div> */}
      <a href="https://poofyland.shop/register" target="_blank">
        <img src="/imgs/sign-up.png" className="signup-img" alt="" />
      </a>
    </div>
  </header>
  );
}
