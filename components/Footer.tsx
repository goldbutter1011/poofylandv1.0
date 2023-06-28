"use client";

const Footer = () => {
  return (
    <>
      <footer id="community" className="section centered">
        <div className="center">
          <div className="community centered">
            <div className="center">
              <img
                className="community-img"
                src="/imgs/community.png"
                alt=""
                style={{ visibility: "visible" }}
                width={500}
                height={500}
              />
              <div className="social">
                <a
                  href="https://www.facebook.com/pooflyland/"
                  target="_blank"
                  className="facebook"
                  style={{ visibility: "visible" }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 320 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                  </svg>
                </a>

                <a
                  href="https://twitter.com/PoofyLand"
                  target="_blank"
                  className="twitter"
                  style={{ visibility: "visible" }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/company/poofylandnft/"
                  target="_blank"
                  className="linkin"
                  style={{ visibility: "visible" }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/poofyland_official/"
                  target="_blank"
                  className="instagram"
                  style={{ visibility: "visible" }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                  </svg>
                </a>

                <a
                  href="https://www.youtube.com/@poofyland"
                  target="_blank"
                  className="youtube"
                  style={{ visibility: "visible" }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 576 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                  </svg>
                </a>

                <a
                  href="https://t.me/poofylandofficial"
                  target="_blank"
                  className="telegram"
                  style={{ visibility: "visible" }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                  </svg>
                </a>

                <a
                  className="discord"
                  href="https://discord.com/invite/eEsK8u7cXE"
                  target="_blank"
                  style={{ visibility: "visible" }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 640 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                  </svg>
                </a>

                <a
                  href="https://www.tiktok.com/@poofyland"
                  target="_blank"
                  className="tiktok"
                  style={{ visibility: "visible" }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                  </svg>
                </a>

                <a
                  href="https://medium.com/@poofyland"
                  target="_blank"
                  className="medium"
                  style={{ visibility: "visible" }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                  </svg>
                </a>
              </div>
              <br></br>
            </div>
          </div>

          <div className="partners" style={{ visibility: "visible" }}>
            <small>Partners:</small>
            <br></br>
            <div>
              <img src="/imgs/ddc.png" alt="" />
              <img src="/imgs/crossspace-2.png" alt="" />
            </div>
          </div>

          <div className="partners" style={{ visibility: "visible" }}>
            <small>Powered By:</small>
            <br></br>
            <a href="https://unity.com/" target="_blank">
              <img src="/imgs/unity.png" alt="" />
            </a>
          </div>

          <div className="copyright" style={{ visibility: "visible" }}>
            <small>Developed By:</small>
            <br></br>

            <a href="https://crazymunchies.studio" target="_blank">
              <img src="/imgs/cms-logo.png" alt="" width={500} height={500} />
            </a>

            <p className="footer-links">
              <a href="https://poofyland.shop" target="_blank">
                Shop
              </a>
              <a href="https://poofyland.gitbook.io/poofyland/" target="_blank">
                Whitepaper
              </a>
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms Of Service</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
