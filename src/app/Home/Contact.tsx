export default function Contact() {
  return (
    <>
      <section className="space-bottom" id="contact-sec">
        <div className="container">
          <div className="cta-box">
            <div className="row">
              <div className="col-lg-5">
                <div className="cta-box_img">
                  <img src="assets/img/normal/customer_support.jpg" alt="Image" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="cta-box_content">
                  <div className="cta-box_icon">
                    <img src="assets/img/icon/call_1.svg" alt="Icon" />
                  </div>
                  <div className="title-area mb-35">
                    <div className="shadow-title">CONSULTATION</div>
                    <span className="sub-title">
                      <div className="icon-masking me-2">
                        <span className="mask-icon" data-mask-src="assets/img/theme-img/title_shape_2.svg"></span> <img src="assets/img/theme-img/title_shape_2.svg" alt="shape" />
                      </div>
                      LET’S CONSULTATION
                    </span>
                    <h2 className="sec-title">
                      Let’s Talk About Business Solutions <span className="text-theme">With Us</span>
                    </h2>
                  </div>
                  <a href="contact.html" className="th-btn">
                    CONTACT US<i className="fa-regular fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
