"use client";
import React from "react";
import { useState, useEffect } from "react";
import ModelViewer from "../components/libs/ModelViewer";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import KeenSlider from "./libs/KeenSlider";

import "@google/model-viewer";
import ScrollReveal from "scrollreveal";

const AboutSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [load, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      loop: true,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseover = false;

        function clearNexttimeout() {
          clearTimeout(timeout);
        }

        function nextTimeout() {
          clearTimeout(timeout);
          timeout = setTimeout(() => {
            slider.next();
          }, 10000);
        }

        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseover = true;
            clearNexttimeout();
          });

          slider.container.addEventListener("mouseout", () => {
            mouseover = false;
            nextTimeout();
          });

          nextTimeout();
        });
        slider.on("dragStarted", clearNexttimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  useEffect(() => {
    ScrollReveal().reveal(".about-logo", {
      delay: 100,
      duration: 500,
      distance: 0,
      scale: 0.7,
      origin: "bottom",
      reset: true,
    });
  }, []);

  return (
    <>
      <section id="about" className="section">
        <span className="starcss_1">
          <span className="starcss_2">
            <img src="/imgs/stars-1.png" alt="" className="stars-bg" />
          </span>
        </span>
        <span className="starcss_3">
          <span className="starcss_4">
            <img src="/imgs/stars-2.png" alt="" className="stars-bg" />
          </span>
        </span>
        <span className="starcss_5">
          <span className="starcss_6">
            <img src="/imgs/stars-1.png" alt="" className="stars-bg-2" />
          </span>
        </span>
        <span className="starcss_7">
          <span className="starcss_8">
            <img src="/imgs/stars-2.png" alt="" className="stars-bg-2" />
          </span>
        </span>
        <div className="content">
          <section className="centered">
            <div className="about-container">
              <img src="/imgs/environment-float.png" className="about-logo" />
              <div>
                <span className="mini-header">About</span>
                <h1>POOFYLAND</h1>
                <p>
                  Poofyland is a turn-based NFT 3D mobile game where players can
                  explore a magical world filled with Poofies, creatures with
                  different elemental powers. The game offers various activities
                  such as duels, training, and leveling up skills. One of the
                  unique features of the game is the integration of a fair-play
                  rewarding system, which allows players to earn by winning
                  battles against other players in the arena. It supports
                  various currencies including crypto, making it accessible
                  worldwide. Poofyland is an entertaining and immersive gaming
                  experience suitable for players of all skill levels. Available
                  on Google Play and Apple App Store soon.
                </p>
                <img
                  className="down-btns"
                  src="/imgs/download.png"
                  alt="download"
                ></img>
                <br />
                <a
                  className="poofy-btn"
                  href="https://poofyland.gitbook.io/poofyland/"
                  target="_blank"
                >
                  WHITEPAPER
                </a>
                <button className="poofy-btn m-0">TEASER</button>
              </div>
            </div>
          </section>
          <section id="nft" className="section centered">
            <div className="u-full-width">
              <div className="center section-spacer">
                <span className="mini-header">The Poofies</span>
                <h2>NFT</h2>
              </div>
              <div className="poofies">
                <div className="poofy-container">
                  <div className="model">
                    <ModelViewer
                      altname="fire Poofy"
                      source="/3d/fire.glb"
                      iosSource="/3d/fire.usdz"
                    />
                  </div>
                  <div>
                    <strong>PYRO (FIRE)</strong>
                  </div>
                  <p className="poofy-description">
                    The masters of fire, capable of unleashing powerful flames
                    and scorching their opponents with intense heat. Great
                    choice for more aggressive playstyle.z
                  </p>
                </div>

                <div
                  className="poofy-container"
                  style={{ visibility: "visible" }}
                >
                  <div className="model">
                    <ModelViewer
                      altname="water Poofy"
                      source="/3d/water.glb"
                      iosSource="/3d/water.usdz"
                    />
                  </div>
                  <div>
                    <strong>AQUA (WATER)</strong>
                  </div>
                  <p className="poofy-description">
                    The water-based creatures that can manipulate water and ice
                    to freeze their enemies in place, heal their teammates, and
                    create a variety of other aquatic effects.
                  </p>
                </div>

                <div
                  className="poofy-container"
                  style={{ visibility: "visible" }}
                >
                  <div className="model">
                    <ModelViewer
                      altname="wind Poofy"
                      source="/3d/wind.glb"
                      iosSource="/3d/wind.usdz"
                    />
                  </div>
                  <div>
                    <strong>AERO (WIND)</strong>
                  </div>
                  <p className="poofy-description">
                    They specialize in manipulating the wind and air around
                    them, allowing them to move with lightning-fast speed and
                    fly high above their opponents.
                  </p>
                </div>

                <div
                  className="poofy-container"
                  style={{ visibility: "visible" }}
                >
                  <div className="model">
                    <ModelViewer
                      altname="earth Poofy"
                      source="/3d/earth.glb"
                      iosSource="/3d/earth.usdz"
                    />
                  </div>
                  <div>
                    <strong>TERRA (EARTH)</strong>
                  </div>
                  <p className="poofy-description">
                    The grounded creatures that can control the earth and its
                    elements, allowing them to create walls and obstacles to
                    protect themselves and their teammates.
                  </p>
                </div>
              </div>
              <p className="center">
                <a
                  href="https://poofyland.shop"
                  target="_blank"
                  className="poofy-btn m-0"
                >
                  SHOP
                </a>
              </p>
            </div>
          </section>
          <section id="modes" className="section centered">
            <div className="u-full-width">
              <div className="center">
                <span className="mini-header">Game</span>
                <h2>Modes</h2>
              </div>
              <div ref={sliderRef} className="keen-slider mode-container">
                <KeenSlider Imageurl="/imgs/mode-new-arena.png">
                  An interactive game arena where players fight against other
                  players over gold loot. All gold won from the arena can be
                  withdrawn into real-world currency with a predetermined
                  conversion rate. PVP uses a balanced system that matches
                  players against other players inside the same league and
                  level. The arena offers players an earning opportunity for
                  every win. Every room has a different energy requirement to
                  get in to. The amount of gold looted from each match will
                  depend on which room the player chooses to enter.
                </KeenSlider>

                <KeenSlider Imageurl="/imgs/mode-new-training.png">
                  Skills are learnt in the training ground where Mystic Masters
                  test out the strength of their team composition. By embarking
                  on a journey inside the training ground, Poofies are subjected
                  in Missions and Trainings which allows them to upgrade their
                  learnt skills which expands their skill set, thereby giving
                  them more skill options especially when fighting in the arena.
                  Mystic Masters can then utilise these skills to make the best
                  combination and gain advantage in PVP matches.
                </KeenSlider>

                <KeenSlider Imageurl="/imgs/mode-new-fusion.png">
                  To make Poofies even more powerful than they already are,
                  Fusion is undertaken. By undergoing Fusion, Poofies` powers
                  are merged to make one strong Poofy. This Poofy will have an
                  increased star level which levels up its base attributes
                  thereby making it stronger in the arena. This increase in
                  star-level will come in handy when battling with other
                  Poofies, increasing the team`s chances of winning the match.
                </KeenSlider>
                <svg
                  className="arrow arrow--left "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  style={{ width: 45, height: 45 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    instanceRef.current?.prev();
                  }}
                >
                  <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"></path>
                </svg>
                <svg
                  className="arrow arrow--right  arrow--disabled"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  style={{ width: 45, height: 45 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    instanceRef.current?.next();
                  }}
                >
                  <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path>
                </svg>
              </div>
              <div className="modes-nav">
                <span
                  className={"dot" + (currentSlide == 0 ? " active" : "")}
                  onClick={(e) => {
                    instanceRef.current.moveToIdx(0);
                  }}
                >
                  Arena
                </span>
                <span
                  className={"dot" + (currentSlide == 1 ? " active" : "")}
                  onClick={(e) => {
                    instanceRef.current.moveToIdx(1);
                  }}
                >
                  Training
                </span>
                <span
                  className={"dot" + (currentSlide == 2 ? " active" : "")}
                  onClick={(e) => {
                    instanceRef.current.moveToIdx(2);
                  }}
                >
                  Fusion
                </span>
              </div>
            </div>
          </section>
          <section id="events" className="section centered">
            <div className="u-full-width">
              <div className="center section-spacer">
                <span className="mini-header">Special</span>
                <h2>Events</h2>
              </div>
              <br />
              <div className="front-events-list">
                <div className="event">
                  <a href="/event/poofyland-referral-1682315393">
                    <div className="event-img">
                      <img
                        src="https://api.poofyland.io/storage/banner-photos/zuSmDKGvWLVkSA5OLl1f0v4bxHq8UEikvUvdS8PE.jpg"
                        alt=""
                      />
                    </div>
                    <h3>Beta Test Exclusive Slots!</h3>
                    <p>
                      The Beta test which was previously scheduled to launch on
                      the 23rd of June will be moved to a later date.
                    </p>
                  </a>
                </div>
                <div className="event">
                  <a href="/event/400-busd-pre-betatest-airdrop-1687239982">
                    <div className="event-img">
                      <img
                        src="https://api.poofyland.io/storage/banner-photos/JAhWfShwpRsnEDa2nVDFB0EWIdQctPRTlQJAQH4m.jpg"
                        alt=""
                      />
                    </div>
                    <h3>400$ Busd Pre-Betatest Airdrop 🚀</h3>
                    <p>
                      We are dropping more $$$ this month! Come and join
                      Poofyland`s 🥳400$ BUSD PRE-BETATEST AIRDROP 🚀
                    </p>
                  </a>
                </div>
                <div className="event">
                  <a href="/event/beta-test-1683245621">
                    <div className="event-img">
                      <img
                        src="https://api.poofyland.io/storage/banner-photos/je6HYdC7Cqm62Q9YWSPLYChgM2xMGCzruO0YZoeD.jpg"
                        alt=""
                      />
                    </div>
                    <h3>Beta Test</h3>
                    <p>
                      Poofyland is a new NFT game that will be starting the beta
                      test on June. As a beta tester, you will have the
                      opportunity to explore the world of PoofyLand, interact
                      with other players, and provide feedback on your
                      experience.
                    </p>
                  </a>
                </div>
              </div>
              <p className="center">
                <br />
                <a className="poofy-btn m-0 active" href="/events">
                  MORE EVENTS
                </a>
              </p>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
