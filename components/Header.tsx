"use client";
import React from "react";
import NextFlipdown from "./FlipDown";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    ScrollReveal().reveal(".main-event", {
      delay: 100,
      duration: 500,
      distance: 0,
      scale: 0.7,
      origin: 'bottom',
      reset: true,
    });
  }, []);

  return (
    <>
      <header id="home" className="section viewport-header centered content">
        <div className="main-event">
          <div>
            <div className="centered">
              <img src="/imgs/logo.png" className="event-logo" alt="" />
            </div>
            <br></br>

            <a
              href="https://poofyland.shop/register"
              target="_blank"
              className="centered"
            >
              <img src="/imgs/join-beta.png" className="event-img" alt="" />
            </a>
            <NextFlipdown endTime={(new Date().getTime() / 1000) + (86400 * 7) + (15 * 3600) + (52 * 60) + 1} theme='dark'/>
            <div className="centered" style={{ marginTop: 30 }}>
              <a
                href="https://poofyland.shop/register"
                target="_blank"
                style={{ width: 170, height: 20 }}
              >
                <img src="/imgs/sign-up.png" className="signup-img" alt="" />
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
