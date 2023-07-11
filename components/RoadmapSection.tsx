"use client"; // this is a client component
import React from "react";

const Roadmapsection = () => {

  return (
    <section id="roadmap" className="section centered">
      <span className="cloud">
        <span className="cloud1">
          <img src="/imgs/clouds-1.png" alt="" className="clouds-bg" />
        </span>
      </span>
      <span className="cloud">
        <span className="cloud2">
          <img src="/imgs/clouds-2.png" alt="" className="clouds-bg" />
        </span>
      </span>
      <div className="content section-spacer">
        <div className="center roadmap-header">
          <span className="mini-header">Our Goal</span>
          <h2>ROADMAP</h2>
        </div>
        <div className="timeline">
          <ul>
            <li>
              <div>
                <span className="mini-header">Q4 2022</span>
                <ul className="roadmap-list">
                  <li>Team Onboarding</li>
                  <li>
                    Project Plan Approval
                  </li>
                  <li>
                    Game and Character Design Conceptualization
                  </li>
                  <li>
                    Implementation of Game Play and Workflow Designs
                  </li>
                  <li>
                    Game Characters and Map Prototype Finalization
                  </li>
                  <li>
                    Game Design and Asset Licensing
                  </li>
                  <li>
                    Completion of Documents for Mobile App Deployment
                  </li>
                  <li>
                    Game Economic Design and Implementation
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div>
                <span className="mini-header">Q1 2023</span>
                <ul className="roadmap-list">
                  <li>
                    Official Release of marketing Site and Content
                  </li>
                  <li>
                    Trailers and Teasers of In-Game Story Outline
                  </li>
                  <li >
                    Implementation of whitepaper and NFT Smart contract
                  </li>
                  <li >
                    Internal Phase: Game and Shop Testing
                  </li>
                  <li >
                    Marketing and Community events starts
                  </li>
                  <li >
                    Social Media and Press Release Publications
                  </li>
                </ul>
              </div>
            </li>
            <li >
              <div>
                <span className="mini-header">Q2 2023</span>
                <ul className="roadmap-list">
                  <li >
                    Internal Phase: PVP and Training Ground Enhancement
                  </li>
                  <li >
                    NFT Minting (Beta Test)
                  </li>
                  <li >
                    Game Enhancement: Internal Betatest
                  </li>
                  <li >
                    Public Release: Training Ground, PVP Mode, Game Shop
                  </li>
                  <li >
                    Ingame Economy integration
                  </li>
                </ul>
              </div>
            </li>
            <li >
              <div>
                <span className="mini-header">Q3 2023</span>
                <ul className="roadmap-list">
                  <li >
                    Official Game Launching (All Game Modes)
                  </li>
                  <li >Marketplace</li>
                  <li >NFT Public Sales</li>
                  <li >
                    Public Release: Fusion
                  </li>
                  <li >
                    Community Contests and marketing Strategies
                  </li>
                  <li >
                    Mobile Version Enhancement and improvements
                  </li>
                  <li >
                    Acquire Official Partnership with Private Ventures
                  </li>
                </ul>
              </div>
            </li>
            <li >
              <div>
                <span className="mini-header">Q4 2023</span>
                <ul className="roadmap-list">
                  <li >PVP Tournaments</li>
                  <li >
                    Advance Game Accessories and Upgrades
                  </li>
                  <li >
                    Additional Game Modes (TBA)
                  </li>
                  <li >
                    Community Engagement and marketing Strategies
                  </li>
                </ul>
              </div>
            </li>
            <li >
              <div>
                <span className="mini-header">Q1 2024</span>
                <ul className="roadmap-list">
                  <li >
                    Ongoing Development…
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <img src="/imgs/mountain.png" className="mountain" alt=""></img>
    </section>
  );
};

export default Roadmapsection;
