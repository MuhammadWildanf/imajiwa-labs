"use client";

import { useState, useEffect } from "react";

export default function About() {
  const [activeCategory, setActiveCategory] = useState("cat1");

  useEffect(() => {
    // Menggunakan data-mask-src sebagai masking image
    document.querySelectorAll(".mask-icon").forEach((el) => {
      const maskSrc = el.getAttribute("data-mask-src");
      if (maskSrc) {
        (el as HTMLElement).style.maskImage = `url(${maskSrc})`;
        (el as HTMLElement).style.webkitMaskImage = `url(${maskSrc})`;
      }
    });

    // Mengganti src img jika ada data-mask-src
    document.querySelectorAll(".mask-icon img").forEach((img) => {
      const parent = img.closest(".mask-icon");
      const maskSrc = parent?.getAttribute("data-mask-src");
      if (maskSrc) {
        img.setAttribute("src", maskSrc);
      }
    });

    document.querySelectorAll("[data-bg-src]").forEach((el) => {
      const bgSrc = el.getAttribute("data-bg-src");
      if (bgSrc) {
        (el as HTMLElement).style.backgroundImage = `url(${bgSrc})`;
      }
    });
  }, []);

  return (
    <>
      <div className="overflow-hidden space" id="about-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 mb-30 mb-xl-0">
              <div className="img-box4 tilt-active">
                <div className="img-shape icon-masking">
                  <span className="mask-icon" data-mask-src="assets/img/normal/about_3_1-shape.png"></span>
                  <img src="assets/img/normal/about_3_1-shape.png" alt="img" />
                </div>
                <img src="assets/img/normal/about_3_1.png" alt="About" />
                <a href="https://www.youtube.com/watch?v=_sI_Ps7JSEk" className="play-btn popup-video">
                  <i className="fas fa-play"></i>
                </a>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="title-area mb-35 text-center text-xl-start">
                <div className="shadow-title">ABOUT US</div>
                <span className="sub-title">
                  <div className="icon-masking me-2">
                    <span className="mask-icon" data-mask-src="assets/img/theme-img/title_shape_2.svg"></span> <img src="assets/img/theme-img/title_shape_2.svg" alt="shape" />
                  </div>
                  About WEBTECK IT SOLUTIONS
                </span>
                <h2 className="sec-title">
                  We Are Increasing Business Success With <span className="text-theme">Technology</span>
                </h2>
              </div>
              <p className="mt-n2 mb-30 text-center text-xl-start">Synergistically incentivize effective imperatives through fully researched intellectual capital. Appropriately fashion client-based.</p>
              <div className="achivement-tab filter-menu-active indicator-active">
                <button data-filter=".cat1" className="active" type="button">
                  Award Winning
                </button>{" "}
                <button data-filter=".cat2" type="button">
                  Technology Index
                </button>
              </div>
              <div className="achivement-box-area filter-active-cat1">
                <div className="filter-item w-100 cat1">
                  <div className="achivement-box">
                    <div className="achivement-box_img">
                      <img src="assets/img/normal/about_3_1_1.jpg" alt="About" />
                    </div>
                    <div className="media-body">
                      <h3 className="box-title">An Award-Winning Company.</h3>
                      <p className="achivement-box_text">Monotonically matrix extensible applications and go forward communities. Synergistically extend client-based manufactured.</p>
                      <a href="about.html" className="th-btn">
                        About More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="filter-item w-100 cat2">
                  <div className="achivement-box">
                    <div className="achivement-box_img">
                      <img src="assets/img/normal/about_3_1_2.jpg" alt="About" />
                    </div>
                    <div className="media-body">
                      <h3 className="box-title">Having 25+ Years Of Experience.</h3>
                      <p className="achivement-box_text">Monotonically matrix extensible applications and go forward communities. Synergistically extend client-based manufactured.</p>
                      <a href="about.html" className="th-btn">
                        About More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-top-center z-index-common space-top" id="service-sec" data-bg-src="assets/img/bg/service_bg_2.jpg">
        <div className="container">
          <div className="row justify-content-lg-between justify-content-center align-items-center">
            <div className="col-lg-6 col-sm-9 pe-xl-5">
              <div className="title-area text-center text-lg-start">
                <div className="shadow-title color2">SERVICES</div>
                <span className="sub-title">
                  <div className="icon-masking me-2">
                    <span className="mask-icon" data-mask-src="assets/img/theme-img/title_shape_2.svg"></span> <img src="assets/img/theme-img/title_shape_2.svg" alt="shape" />
                  </div>
                  WHAT WE DO
                </span>
                <h2 className="sec-title text-white">
                  We Provide Exclusive Service For <span className="text-theme">Your Business</span>
                </h2>
              </div>
            </div>
            <div className="col-auto">
              <div className="sec-btn">
                <a href="service.html" className="th-btn style3">
                  VIEW ALL SERVICES<i className="fa-regular fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
          {/*  <div className="slider-area">
            <div
              className="swiper th-slider has-shadow"
              id="serviceSlider1"
              data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"3"},"1200":{"slidesPerView":"4"}}}'
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="service-grid">
                    <div className="service-grid_icon">
                      <img src="assets/img/icon/service_card_1.svg" alt="Icon" />
                    </div>
                    <div className="service-grid_content">
                      <h3 className="box-title">
                        <a href="service-details.html">Web Development</a>
                      </h3>
                      <p className="service-grid_text">Continually engage customized infomediarie and quality growth strategies. Appropriately.</p>
                      <a href="service-details.html" className="th-btn">
                        Read More<i className="fas fa-arrow-right ms-2"></i>
                      </a>
                      <div className="bg-shape">
                        <img src="assets/img/bg/service_grid_bg.png" alt="bg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="service-grid">
                    <div className="service-grid_icon">
                      <img src="assets/img/icon/service_card_2.svg" alt="Icon" />
                    </div>
                    <div className="service-grid_content">
                      <h3 className="box-title">
                        <a href="service-details.html">UI/UX Design</a>
                      </h3>
                      <p className="service-grid_text">Continually engage customized infomediarie and quality growth strategies. Appropriately.</p>
                      <a href="service-details.html" className="th-btn">
                        Read More<i className="fas fa-arrow-right ms-2"></i>
                      </a>
                      <div className="bg-shape">
                        <img src="assets/img/bg/service_grid_bg.png" alt="bg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="service-grid">
                    <div className="service-grid_icon">
                      <img src="assets/img/icon/service_card_3.svg" alt="Icon" />
                    </div>
                    <div className="service-grid_content">
                      <h3 className="box-title">
                        <a href="service-details.html">Digital Marketing</a>
                      </h3>
                      <p className="service-grid_text">Continually engage customized infomediarie and quality growth strategies. Appropriately.</p>
                      <a href="service-details.html" className="th-btn">
                        Read More<i className="fas fa-arrow-right ms-2"></i>
                      </a>
                      <div className="bg-shape">
                        <img src="assets/img/bg/service_grid_bg.png" alt="bg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="service-grid">
                    <div className="service-grid_icon">
                      <img src="assets/img/icon/service_card_4.svg" alt="Icon" />
                    </div>
                    <div className="service-grid_content">
                      <h3 className="box-title">
                        <a href="service-details.html">Business Analysis</a>
                      </h3>
                      <p className="service-grid_text">Continually engage customized infomediarie and quality growth strategies. Appropriately.</p>
                      <a href="service-details.html" className="th-btn">
                        Read More<i className="fas fa-arrow-right ms-2"></i>
                      </a>
                      <div className="bg-shape">
                        <img src="assets/img/bg/service_grid_bg.png" alt="bg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="service-grid">
                    <div className="service-grid_icon">
                      <img src="assets/img/icon/service_card_5.svg" alt="Icon" />
                    </div>
                    <div className="service-grid_content">
                      <h3 className="box-title">
                        <a href="service-details.html">Software Services</a>
                      </h3>
                      <p className="service-grid_text">Continually engage customized infomediarie and quality growth strategies. Appropriately.</p>
                      <a href="service-details.html" className="th-btn">
                        Read More<i className="fas fa-arrow-right ms-2"></i>
                      </a>
                      <div className="bg-shape">
                        <img src="assets/img/bg/service_grid_bg.png" alt="bg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
      <div className="why-sec-v2" data-bg-src="assets/img/bg/why_bg_2.jpg">
        <div className="container space">
          <div className="row align-items-center flex-row-reverse">
            <div className="col-xl-6 mb-30 mb-xl-0">
              <div className="img-box5">
                <img className="tilt-active" src="assets/img/normal/why_2_1.png" alt="Why" />
                <div className="year-counter">
                  <h3 className="year-counter_number">
                    <span className="counter-number">10</span>k+
                  </h3>
                  <p className="year-counter_text">Clients Active</p>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="title-area mb-35">
                <div className="shadow-title color3">Choose US</div>
                <span className="sub-title">
                  <div className="icon-masking me-2">
                    <span className="mask-icon" data-mask-src="assets/img/theme-img/title_shape_2.svg"></span> <img src="assets/img/theme-img/title_shape_2.svg" alt="shape" />
                  </div>
                  WHY CHOOSE US
                </span>
                <h2 className="sec-title">
                  More Than 24+ Years Experience We Provide <span className="text-theme">IT Services</span>
                </h2>
              </div>
              <p className="mt-n2 mb-30">
                Collaboratively envisioneer user friendly supply chains and cross unit imperative. Authoritativel fabricate competitive resource and holistic. Holisticly restore real time resources whereas standardized networks.
              </p>
              <div className="feature-circle-wrap">
                <div className="feature-circle">
                  <div className="progressbar" data-path-color="#684DF4">
                    <div className="circle" data-percent="90">
                      <div className="circle-num"></div>
                    </div>
                  </div>
                  <div className="media-body">
                    <h3 className="feature-circle_title">Business Grow</h3>
                    <p className="feature-circle_text">Efficiently transition top-line ideas before market.</p>
                  </div>
                </div>
                <div className="feature-circle">
                  <div className="progressbar" data-path-color="#684DF4">
                    <div className="circle" data-percent="95">
                      <div className="circle-num"></div>
                    </div>
                  </div>
                  <div className="media-body">
                    <h3 className="feature-circle_title">Quality Products</h3>
                    <p className="feature-circle_text">Efficiently transition top-line ideas before market.</p>
                  </div>
                </div>
              </div>
              <a href="about.html" className="th-btn">
                LEARN MORE<i className="fa-regular fa-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
