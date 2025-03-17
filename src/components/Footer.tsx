import React from "react";

const Footer = () => {
  return (
    <footer className="footer-wrapper footer-layout3" data-bg-src="assets/img/bg/footer_bg_2.jpg">
      <div className="footer-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-3">
              <div className="footer-logo">
                <a className="icon-masking" href="index.html"><span data-mask-src="assets/img/logo-white.svg" className="mask-icon"></span><img src="assets/img/logo-white.svg" alt="Webteck" /></a>
              </div>
            </div>
            <div className="col-xl-9">
              <div className="newsletter-wrap">
                <div className="newsletter-content">
                  <h3 className="newsletter-title">News Subscription</h3>
                  <p className="newsletter-text">Get Latest Deals from Waker’s Inbox & Subscribe Now</p>
                </div>
                <form className="newsletter-form">
                  <div className="form-group"><input className="form-control" type="email" placeholder="Email Address" required="" /> <i className="fal fa-envelope"></i></div>
                  <button type="submit" className="th-btn style3">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="widget-area">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-6 col-xxl-3 col-xl-4">
              <div className="widget footer-widget">
                <h3 className="widget_title">About Company</h3>
                <div className="th-widget-about">
                  <p className="about-text">Professionally redefine transparent ROI through low-risk high-yield imperatives. Progressively create empowered. cost effective users via team driven.</p>
                  <div className="th-social">
                    <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a> <a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a> <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
                    <a href="https://www.whatsapp.com/"><i className="fab fa-whatsapp"></i></a> <a href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Quick Links</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="team.html">Meet Our Team</a></li>
                    <li><a href="project.html">Our Projects</a></li>
                    <li><a href="faq.html">Help & FAQs</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">IT SERVICES</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li><a href="service-details.html">Web Development</a></li>
                    <li><a href="service-details.html">Business Development</a></li>
                    <li><a href="service-details.html">Product Management</a></li>
                    <li><a href="service-details.html">UI/UX Design</a></li>
                    <li><a href="service-details.html">Cloud services</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget">
                <h3 className="widget_title">Recent Posts</h3>
                <div className="recent-post-wrap">
                  <div className="recent-post">
                    <div className="media-img">
                      <a href="blog-details.html"><img src="assets/img/blog/recent-post-2-1.jpg" alt="Blog Image" /></a>
                    </div>
                    <div className="media-body">
                      <h4 className="post-title"><a className="text-inherit" href="blog-details.html">Unsatiable entreaties may collecting Power.</a></h4>
                      <div className="recent-post-meta">
                        <a href="blog.html"><i className="fal fa-calendar-days"></i>21 June, 2024</a>
                      </div>
                    </div>
                  </div>
                  <div className="recent-post">
                    <div className="media-img">
                      <a href="blog-details.html"><img src="assets/img/blog/recent-post-2-2.jpg" alt="Blog Image" /></a>
                    </div>
                    <div className="media-body">
                      <h4 className="post-title"><a className="text-inherit" href="blog-details.html">Regional Manager limited time management.</a></h4>
                      <div className="recent-post-meta">
                        <a href="blog.html"><i className="fal fa-calendar-days"></i>22 June, 2024</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
              <p className="copyright-text">Copyright <i className="fal fa-copyright"></i> 2024 <a href="https://themeforest.net/user/themeholy">Themeholy</a>. All Rights Reserved.</p>
            </div>
            <div className="col-lg-6 text-lg-end text-center">
              <div className="footer-links">
                <ul>
                  <li><a href="about.html">Terms & Condition</a></li>
                  <li><a href="about.html">Careers</a></li>
                  <li><a href="about.html">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
