export default function Process() {
  return (
    <section className="bg-smoke" id="process-sec" data-bg-src="assets/img/bg/process_bg_1.png">
      <div className="container space">
        <div className="title-area text-center">
          <div className="shadow-title">PROCESS</div>
          <span className="sub-title">
            <div className="icon-masking me-2">
              <span className="mask-icon" data-mask-src="assets/img/theme-img/title_shape_2.svg"></span> <img src="assets/img/theme-img/title_shape_2.svg" alt="shape" />
            </div>
            WORK PROCESS
          </span>
          <h2 className="sec-title">
            How to work <span className="text-theme">it!</span>
          </h2>
        </div>
        <div className="process-card-area">
          <div className="process-line">
            <img src="assets/img/bg/process_line.svg" alt="line" />
          </div>
          <div className="row gy-40">
            <div className="col-sm-6 col-xl-3 process-card-wrap">
              <div className="process-card">
                <div className="process-card_number">01</div>
                <div className="process-card_icon">
                  <img src="assets/img/icon/process_card_1.svg" alt="icon" />
                </div>
                <h2 className="box-title">Select a project</h2>
                <p className="process-card_text">Continua scale empowered metrics with cost effective innovation.</p>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3 process-card-wrap">
              <div className="process-card">
                <div className="process-card_number">02</div>
                <div className="process-card_icon">
                  <img src="assets/img/icon/process_card_2.svg" alt="icon" />
                </div>
                <h2 className="box-title">Project analysis</h2>
                <p className="process-card_text">Continua scale empowered metrics with cost effective innovation.</p>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3 process-card-wrap">
              <div className="process-card">
                <div className="process-card_number">03</div>
                <div className="process-card_icon">
                  <img src="assets/img/icon/process_card_3.svg" alt="icon" />
                </div>
                <h2 className="box-title">Plan Execute</h2>
                <p className="process-card_text">Continua scale empowered metrics with cost effective innovation.</p>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3 process-card-wrap">
              <div className="process-card">
                <div className="process-card_number">04</div>
                <div className="process-card_icon">
                  <img src="assets/img/icon/process_card_4.svg" alt="icon" />
                </div>
                <h2 className="box-title">Deliver result</h2>
                <p className="process-card_text">Continua scale empowered metrics with cost effective innovation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
