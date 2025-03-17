"use client";

export default function Hero() {
  return (
    <div className="th-hero-wrapper hero-4" id="hero">
      <div className="body-particle" id="body-particle"></div>
      <div className="hero-img tilt-active">
        <img src="assets/img/hero/hero_img_4_1.png" alt="Hero Image" />
      </div>
      <div className="container">
        <div className="hero-style4">
          <div className="ripple-shape">
            <span className="ripple-1"></span>
            <span className="ripple-2"></span>
            <span className="ripple-3"></span>
            <span className="ripple-4"></span>
            <span className="ripple-5"></span>
            <span className="ripple-6"></span>
          </div>
          <span className="hero-subtitle">Best Marketing Service</span>
          <h1 className="hero-title">Make The Easiest</h1>
          <h1 className="hero-title">Solution For You</h1>
          <p className="hero-text">Energistically harness ubiquitous imperatives without state of the art collaboration and idea-sharing. Monotonectally parallel task cross-unit experiences and front-end.</p>
          <div className="btn-group">
            <a href="about.html" className="th-btn">
              ABOUT US<i className="fa-regular fa-arrow-right ms-2"></i>
            </a>
            <div className="call-btn">
              <a href="https://www.youtube.com/watch?v=_sI_Ps7JSEk" className="play-btn popup-video">
                <i className="fas fa-play"></i>
              </a>
              <div className="media-body">
                <a href="https://www.youtube.com/watch?v=_sI_Ps7JSEk" className="btn-title popup-video">
                  Watch Our Story
                </a>{" "}
                <span className="btn-text">Subscribe Now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="triangle-1"></div>
      <div className="triangle-2"></div>
      <div className="hero-shape2">
        <img src="assets/img/hero/hero_shape_2_2.png" alt="shape" />
      </div>
      <div className="hero-shape3">
        <img src="assets/img/hero/hero_shape_2_3.png" alt="shape" />
      </div>
    </div>
  );
}
