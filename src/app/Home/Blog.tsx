"use client";
import React from "react";
import { useState, useEffect } from "react";

export default function Blog() {
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
      <section className="bg-top-right bg-smoke overflow-hidden space" id="blog-sec" data-bg-src="assets/img/bg/blog_bg_1.png">
        <div className="container">
          <div className="title-area text-center">
            <div className="shadow-title color3">Update</div>
            <span className="sub-title">
              <div className="icon-masking me-2">
                <span className="mask-icon" data-mask-src="assets/img/theme-img/title_shape_2.svg"></span> <img src="assets/img/theme-img/title_shape_2.svg" alt="shape" />
              </div>
              NEWS & ARTICLES
            </span>
            <h2 className="sec-title">
              Get Every Single Update <span className="text-theme">Blog</span>
            </h2>
          </div>
          <div className="slider-area">
            <div
              className="swiper th-slider has-shadow"
              id="blogSlider2"
              data-slider-options='{"loop":true,"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"3"}}}'
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="blog-card">
                    <div className="blog-img">
                      <img src="assets/img/blog/blog_1_1.jpg" alt="blog image" />
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <a href="blog.html">
                          <i className="fal fa-calendar-days"></i>15 Jan, 2024
                        </a>{" "}
                        <a href="blog.html">
                          <i className="fal fa-comments"></i>2 Comments
                        </a>
                      </div>
                      <h3 className="box-title">
                        <a href="blog-details.html">Unsatiable entreaties may collecting Power.</a>
                      </h3>
                      <p className="blog-text">Progressively plagiarize quality metrics for impactful data. Assertively. Holisticly leverage existing magnetic.</p>
                      <div className="blog-bottom">
                        <a href="blog.html" className="author">
                          <img src="assets/img/blog/author-1-1.png" alt="avater" /> By Themeholy
                        </a>{" "}
                        <a href="blog-details.html" className="line-btn">
                          Read More<i className="fas fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="blog-card">
                    <div className="blog-img">
                      <img src="assets/img/blog/blog_1_2.jpg" alt="blog image" />
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <a href="blog.html">
                          <i className="fal fa-calendar-days"></i>16 Jan, 2024
                        </a>{" "}
                        <a href="blog.html">
                          <i className="fal fa-comments"></i>3 Comments
                        </a>
                      </div>
                      <h3 className="box-title">
                        <a href="blog-details.html">Regional Manager & limited time management.</a>
                      </h3>
                      <p className="blog-text">Progressively plagiarize quality metrics for impactful data. Assertively. Holisticly leverage existing magnetic.</p>
                      <div className="blog-bottom">
                        <a href="blog.html" className="author">
                          <img src="assets/img/blog/author-1-1.png" alt="avater" /> By Themeholy
                        </a>{" "}
                        <a href="blog-details.html" className="line-btn">
                          Read More<i className="fas fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="blog-card">
                    <div className="blog-img">
                      <img src="assets/img/blog/blog_1_3.jpg" alt="blog image" />
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <a href="blog.html">
                          <i className="fal fa-calendar-days"></i>17 Jan, 2024
                        </a>{" "}
                        <a href="blog.html">
                          <i className="fal fa-comments"></i>2 Comments
                        </a>
                      </div>
                      <h3 className="box-title">
                        <a href="blog-details.html">What’s the Holding Back the It Solution Industry?</a>
                      </h3>
                      <p className="blog-text">Progressively plagiarize quality metrics for impactful data. Assertively. Holisticly leverage existing magnetic.</p>
                      <div className="blog-bottom">
                        <a href="blog.html" className="author">
                          <img src="assets/img/blog/author-1-1.png" alt="avater" /> By Themeholy
                        </a>{" "}
                        <a href="blog-details.html" className="line-btn">
                          Read More<i className="fas fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="blog-card">
                    <div className="blog-img">
                      <img src="assets/img/blog/blog_1_4.jpg" alt="blog image" />
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <a href="blog.html">
                          <i className="fal fa-calendar-days"></i>19 Jan, 2024
                        </a>{" "}
                        <a href="blog.html">
                          <i className="fal fa-comments"></i>4 Comments
                        </a>
                      </div>
                      <h3 className="box-title">
                        <a href="blog-details.html">Latin derived from Cicero's 1st-century BC</a>
                      </h3>
                      <p className="blog-text">Progressively plagiarize quality metrics for impactful data. Assertively. Holisticly leverage existing magnetic.</p>
                      <div className="blog-bottom">
                        <a href="blog.html" className="author">
                          <img src="assets/img/blog/author-1-1.png" alt="avater" /> By Themeholy
                        </a>{" "}
                        <a href="blog-details.html" className="line-btn">
                          Read More<i className="fas fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="blog-card">
                    <div className="blog-img">
                      <img src="assets/img/blog/blog_1_1.jpg" alt="blog image" />
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <a href="blog.html">
                          <i className="fal fa-calendar-days"></i>15 Jan, 2024
                        </a>{" "}
                        <a href="blog.html">
                          <i className="fal fa-comments"></i>2 Comments
                        </a>
                      </div>
                      <h3 className="box-title">
                        <a href="blog-details.html">Unsatiable entreaties may collecting Power.</a>
                      </h3>
                      <p className="blog-text">Progressively plagiarize quality metrics for impactful data. Assertively. Holisticly leverage existing magnetic.</p>
                      <div className="blog-bottom">
                        <a href="blog.html" className="author">
                          <img src="assets/img/blog/author-1-1.png" alt="avater" /> By Themeholy
                        </a>{" "}
                        <a href="blog-details.html" className="line-btn">
                          Read More<i className="fas fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="blog-card">
                    <div className="blog-img">
                      <img src="assets/img/blog/blog_1_2.jpg" alt="blog image" />
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <a href="blog.html">
                          <i className="fal fa-calendar-days"></i>16 Jan, 2024
                        </a>{" "}
                        <a href="blog.html">
                          <i className="fal fa-comments"></i>3 Comments
                        </a>
                      </div>
                      <h3 className="box-title">
                        <a href="blog-details.html">Regional Manager & limited time management.</a>
                      </h3>
                      <p className="blog-text">Progressively plagiarize quality metrics for impactful data. Assertively. Holisticly leverage existing magnetic.</p>
                      <div className="blog-bottom">
                        <a href="blog.html" className="author">
                          <img src="assets/img/blog/author-1-1.png" alt="avater" /> By Themeholy
                        </a>{" "}
                        <a href="blog-details.html" className="line-btn">
                          Read More<i className="fas fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="blog-card">
                    <div className="blog-img">
                      <img src="assets/img/blog/blog_1_3.jpg" alt="blog image" />
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <a href="blog.html">
                          <i className="fal fa-calendar-days"></i>17 Jan, 2024
                        </a>{" "}
                        <a href="blog.html">
                          <i className="fal fa-comments"></i>2 Comments
                        </a>
                      </div>
                      <h3 className="box-title">
                        <a href="blog-details.html">What’s the Holding Back the It Solution Industry?</a>
                      </h3>
                      <p className="blog-text">Progressively plagiarize quality metrics for impactful data. Assertively. Holisticly leverage existing magnetic.</p>
                      <div className="blog-bottom">
                        <a href="blog.html" className="author">
                          <img src="assets/img/blog/author-1-1.png" alt="avater" /> By Themeholy
                        </a>{" "}
                        <a href="blog-details.html" className="line-btn">
                          Read More<i className="fas fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="blog-card">
                    <div className="blog-img">
                      <img src="assets/img/blog/blog_1_4.jpg" alt="blog image" />
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <a href="blog.html">
                          <i className="fal fa-calendar-days"></i>19 Jan, 2024
                        </a>{" "}
                        <a href="blog.html">
                          <i className="fal fa-comments"></i>4 Comments
                        </a>
                      </div>
                      <h3 className="box-title">
                        <a href="blog-details.html">Latin derived from Cicero's 1st-century BC</a>
                      </h3>
                      <p className="blog-text">Progressively plagiarize quality metrics for impactful data. Assertively. Holisticly leverage existing magnetic.</p>
                      <div className="blog-bottom">
                        <a href="blog.html" className="author">
                          <img src="assets/img/blog/author-1-1.png" alt="avater" /> By Themeholy
                        </a>{" "}
                        <a href="blog-details.html" className="line-btn">
                          Read More<i className="fas fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button data-slider-prev="#blogSlider2" className="slider-arrow style3 slider-prev">
              <i className="far fa-arrow-left"></i>
            </button>
            <button data-slider-next="#blogSlider2" className="slider-arrow style3 slider-next">
              <i className="far fa-arrow-right"></i>
            </button>
          </div>
        </div>
        <div className="shape-mockup" data-bottom="0" data-left="0">
          <div className="particle-2 small" id="particle-4"></div>
        </div>
      </section>
    </>
  );
}
